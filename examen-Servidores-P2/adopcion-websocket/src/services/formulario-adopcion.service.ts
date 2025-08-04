import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { FormularioAdopcion } from '../entities/formulario-adopcion.entity';
import { CreateFormularioAdopcionDto } from '../dto/create-formulario-adopcion.dto';
import { EstadoSolicitud } from '../interfaces/formulario-adopcion.interface';
import { DatabaseService } from '../data/database.service';

@Injectable()
export class FormularioAdopcionService {
  private readonly databaseService: DatabaseService;

  constructor() {
    this.databaseService = DatabaseService.getInstance();
  }

  async findAll(): Promise<FormularioAdopcion[]> {
    return this.databaseService.getFormulariosAdopcion();
  }

  async findOne(id: string): Promise<FormularioAdopcion> {
    const formulario = this.databaseService.getFormularioAdopcionById(id);
    if (!formulario) {
      throw new NotFoundException(`Formulario con ID ${id} no encontrado`);
    }
    return formulario;
  }

  async findByUsuario(usuarioId: string): Promise<FormularioAdopcion[]> {
    return this.databaseService.getFormulariosAdopcionByUsuario(usuarioId);
  }

  async findByEstado(estado: EstadoSolicitud): Promise<FormularioAdopcion[]> {
    return this.databaseService.getFormulariosAdopcionByEstado(estado);
  }

  async create(createFormularioDto: CreateFormularioAdopcionDto): Promise<FormularioAdopcion> {
    // Verificar que el usuario existe
    const usuario = this.databaseService.getUsuarioById(createFormularioDto.usuarioId);
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${createFormularioDto.usuarioId} no encontrado`);
    }

    // Verificar que la mascota existe y está disponible
    const mascota = this.databaseService.getMascotaById(createFormularioDto.mascotaId);
    if (!mascota) {
      throw new NotFoundException(`Mascota con ID ${createFormularioDto.mascotaId} no encontrada`);
    }

    if (!mascota.disponible) {
      throw new BadRequestException('La mascota no está disponible para adopción');
    }

    // Verificar que no existe una solicitud pendiente para la misma mascota del mismo usuario
    const formulariosPendientes = this.databaseService.getFormulariosAdopcionByUsuario(createFormularioDto.usuarioId)
      .filter(f => f.estado === EstadoSolicitud.PENDIENTE && f.mascotaId === createFormularioDto.mascotaId);

    if (formulariosPendientes.length > 0) {
      throw new BadRequestException('Ya existe una solicitud pendiente para esta mascota');
    }

    const formulario = new FormularioAdopcion(
      uuidv4(),
      createFormularioDto.usuarioId,
      createFormularioDto.mascotaId,
      createFormularioDto.haTenidoMascotasAntes,
      createFormularioDto.tipoVivienda
    );

    return this.databaseService.addFormularioAdopcion(formulario);
  }

  async updateEstado(id: string, estado: EstadoSolicitud): Promise<FormularioAdopcion> {
    const formulario = this.databaseService.getFormularioAdopcionById(id);
    if (!formulario) {
      throw new NotFoundException(`Formulario con ID ${id} no encontrado`);
    }

    if (formulario.estado !== EstadoSolicitud.PENDIENTE) {
      throw new BadRequestException('Solo se puede cambiar el estado de solicitudes pendientes');
    }

    const updatedFormulario = this.databaseService.updateEstadoFormularioAdopcion(id, estado);
    if (!updatedFormulario) {
      throw new NotFoundException(`Formulario con ID ${id} no encontrado`);
    }

    return updatedFormulario;
  }

  async remove(id: string): Promise<void> {
    const success = this.databaseService.deleteFormularioAdopcion(id);
    if (!success) {
      throw new NotFoundException(`Formulario con ID ${id} no encontrado`);
    }
  }

  async getEstadisticas() {
    return this.databaseService.getEstadisticas();
  }
}
