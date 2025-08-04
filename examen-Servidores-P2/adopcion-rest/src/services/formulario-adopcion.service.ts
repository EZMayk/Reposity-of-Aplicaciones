import { Injectable, BadRequestException, NotFoundException, ConflictException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { FormularioAdopcion } from '../entities/formulario-adopcion.entity';
import { CreateFormularioAdopcionDto } from '../dto/create-formulario-adopcion.dto';
import { UpdateEstadoSolicitudDto } from '../dto/update-estado-solicitud.dto';
import { EstadoSolicitud } from '../interfaces/formulario-adopcion.interface';
import { DatabaseService } from '../data/database.service';
import { UsuarioService } from './usuario.service';
import { MascotaService } from './mascota.service';

@Injectable()
export class FormularioAdopcionService {
  private readonly databaseService: DatabaseService;

  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly mascotaService: MascotaService,
  ) {
    this.databaseService = DatabaseService.getInstance();
  }

  async create(createFormularioDto: CreateFormularioAdopcionDto): Promise<FormularioAdopcion> {
    // Verificar que el usuario existe
    await this.usuarioService.findOne(createFormularioDto.usuarioId);

    // Verificar que la mascota existe
    const mascota = await this.mascotaService.findOne(createFormularioDto.mascotaId);

    // Verificar que la mascota está disponible
    if (!mascota.disponible) {
      throw new BadRequestException('La mascota no está disponible para adopción');
    }

    // Verificar que no existe un formulario pendiente para la misma mascota del mismo usuario
    const existeFormularioPendiente = this.databaseService.existeFormularioPendiente(
      createFormularioDto.usuarioId,
      createFormularioDto.mascotaId
    );

    if (existeFormularioPendiente) {
      throw new ConflictException('Ya existe una solicitud pendiente para esta mascota');
    }

    const formulario = new FormularioAdopcion(
      uuidv4(),
      createFormularioDto.usuarioId,
      createFormularioDto.mascotaId,
      createFormularioDto.haTenidoMascotasAntes,
      createFormularioDto.tipoVivienda,
    );

    return this.databaseService.addFormularioAdopcion(formulario);
  }

  async findAll(): Promise<FormularioAdopcion[]> {
    return this.databaseService.getFormulariosAdopcion();
  }

  async findOne(id: string): Promise<FormularioAdopcion> {
    const formulario = this.databaseService.getFormularioById(id);
    if (!formulario) {
      throw new NotFoundException(`Formulario con ID ${id} no encontrado`);
    }
    return formulario;
  }

  async findByUsuario(usuarioId: string): Promise<FormularioAdopcion[]> {
    // Verificar que el usuario existe
    await this.usuarioService.findOne(usuarioId);
    
    return this.databaseService.getFormulariosByUsuario(usuarioId);
  }

  async updateEstado(id: string, updateEstadoDto: UpdateEstadoSolicitudDto): Promise<FormularioAdopcion> {
    const formulario = await this.findOne(id);

    // Solo se puede cambiar el estado si está pendiente
    if (formulario.estado !== EstadoSolicitud.PENDIENTE) {
      throw new BadRequestException('Solo se puede cambiar el estado de solicitudes pendientes');
    }

    const formularioActualizado = this.databaseService.updateEstadoFormulario(id, updateEstadoDto.estado);

    // Si se aprueba la adopción, marcar la mascota como no disponible
    if (updateEstadoDto.estado === EstadoSolicitud.APROBADO) {
      await this.mascotaService.updateDisponibilidad(formulario.mascotaId, false);
    }

    return formularioActualizado!;
  }
}
