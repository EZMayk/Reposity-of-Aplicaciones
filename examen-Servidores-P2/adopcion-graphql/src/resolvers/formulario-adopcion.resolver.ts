import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { BadRequestException, NotFoundException, ConflictException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { FormularioAdopcion } from '../types/formulario-adopcion.type';
import { Usuario } from '../types/usuario.type';
import { Mascota } from '../types/mascota.type';
import { CreateFormularioAdopcionInput } from '../inputs/create-formulario-adopcion.input';
import { EstadoSolicitud } from '../interfaces/formulario-adopcion.interface';
import { DatabaseService } from '../data/database.service';

@Resolver(() => FormularioAdopcion)
export class FormularioAdopcionResolver {
  private readonly databaseService: DatabaseService;

  constructor() {
    this.databaseService = DatabaseService.getInstance();
  }

  @Query(() => [FormularioAdopcion], { name: 'formularios' })
  async findAll(): Promise<FormularioAdopcion[]> {
    return this.databaseService.getFormulariosAdopcion();
  }

  @Query(() => FormularioAdopcion, { name: 'formulario' })
  async findOne(@Args('id') id: string): Promise<FormularioAdopcion> {
    const formulario = this.databaseService.getFormularioById(id);
    if (!formulario) {
      throw new NotFoundException(`Formulario con ID ${id} no encontrado`);
    }
    return formulario;
  }

  @Query(() => [FormularioAdopcion], { name: 'formulariosPorUsuario' })
  async findByUsuario(@Args('usuarioId') usuarioId: string): Promise<FormularioAdopcion[]> {
    // Verificar que el usuario existe
    const usuario = this.databaseService.getUsuarioById(usuarioId);
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${usuarioId} no encontrado`);
    }
    
    return this.databaseService.getFormulariosByUsuario(usuarioId);
  }

  @Mutation(() => FormularioAdopcion)
  async crearFormulario(@Args('input') input: CreateFormularioAdopcionInput): Promise<FormularioAdopcion> {
    // Verificar que el usuario existe
    const usuario = this.databaseService.getUsuarioById(input.usuarioId);
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${input.usuarioId} no encontrado`);
    }

    // Verificar que la mascota existe
    const mascota = this.databaseService.getMascotaById(input.mascotaId);
    if (!mascota) {
      throw new NotFoundException(`Mascota con ID ${input.mascotaId} no encontrada`);
    }

    // Verificar que la mascota está disponible
    if (!mascota.disponible) {
      throw new BadRequestException('La mascota no está disponible para adopción');
    }

    // Verificar que no existe un formulario pendiente para la misma mascota del mismo usuario
    const existeFormularioPendiente = this.databaseService.existeFormularioPendiente(
      input.usuarioId,
      input.mascotaId
    );

    if (existeFormularioPendiente) {
      throw new ConflictException('Ya existe una solicitud pendiente para esta mascota');
    }

    const formulario = new FormularioAdopcion(
      uuidv4(),
      input.usuarioId,
      input.mascotaId,
      input.haTenidoMascotasAntes,
      input.tipoVivienda,
    );

    return this.databaseService.addFormularioAdopcion(formulario);
  }

  @Mutation(() => FormularioAdopcion)
  async aprobarFormulario(@Args('id') id: string): Promise<FormularioAdopcion> {
    const formulario = this.databaseService.getFormularioById(id);
    if (!formulario) {
      throw new NotFoundException(`Formulario con ID ${id} no encontrado`);
    }

    // Solo se puede cambiar el estado si está pendiente
    if (formulario.estado !== EstadoSolicitud.PENDIENTE) {
      throw new BadRequestException('Solo se puede cambiar el estado de solicitudes pendientes');
    }

    const formularioActualizado = this.databaseService.updateEstadoFormulario(id, EstadoSolicitud.APROBADO);

    // Marcar la mascota como no disponible
    this.databaseService.updateMascotaDisponibilidad(formulario.mascotaId, false);

    return formularioActualizado!;
  }

  @Mutation(() => FormularioAdopcion)
  async rechazarFormulario(@Args('id') id: string): Promise<FormularioAdopcion> {
    const formulario = this.databaseService.getFormularioById(id);
    if (!formulario) {
      throw new NotFoundException(`Formulario con ID ${id} no encontrado`);
    }

    // Solo se puede cambiar el estado si está pendiente
    if (formulario.estado !== EstadoSolicitud.PENDIENTE) {
      throw new BadRequestException('Solo se puede cambiar el estado de solicitudes pendientes');
    }

    return this.databaseService.updateEstadoFormulario(id, EstadoSolicitud.RECHAZADO)!;
  }

  // Field resolvers para popular usuario y mascota
  @ResolveField(() => Usuario, { nullable: true })
  async usuario(@Parent() formulario: FormularioAdopcion): Promise<Usuario | null> {
    return this.databaseService.getUsuarioById(formulario.usuarioId) || null;
  }

  @ResolveField(() => Mascota, { nullable: true })
  async mascota(@Parent() formulario: FormularioAdopcion): Promise<Mascota | null> {
    return this.databaseService.getMascotaById(formulario.mascotaId) || null;
  }
}
