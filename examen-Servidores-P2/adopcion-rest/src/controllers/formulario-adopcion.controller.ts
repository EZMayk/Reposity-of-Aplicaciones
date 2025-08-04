import { Controller, Get, Post, Put, Body, Param, HttpCode, HttpStatus, ValidationPipe } from '@nestjs/common';
import { FormularioAdopcionService } from '../services/formulario-adopcion.service';
import { CreateFormularioAdopcionDto } from '../dto/create-formulario-adopcion.dto';
import { UpdateEstadoSolicitudDto } from '../dto/update-estado-solicitud.dto';
import { FormularioAdopcion } from '../entities/formulario-adopcion.entity';

@Controller('formularios-adopcion')
export class FormularioAdopcionController {
  constructor(private readonly formularioAdopcionService: FormularioAdopcionService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })) 
    createFormularioDto: CreateFormularioAdopcionDto
  ): Promise<FormularioAdopcion> {
    return this.formularioAdopcionService.create(createFormularioDto);
  }

  @Get()
  async findAll(): Promise<FormularioAdopcion[]> {
    return this.formularioAdopcionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FormularioAdopcion> {
    return this.formularioAdopcionService.findOne(id);
  }

  @Get('usuario/:usuarioId')
  async findByUsuario(@Param('usuarioId') usuarioId: string): Promise<FormularioAdopcion[]> {
    return this.formularioAdopcionService.findByUsuario(usuarioId);
  }

  @Put(':id/estado')
  async updateEstado(
    @Param('id') id: string,
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })) 
    updateEstadoDto: UpdateEstadoSolicitudDto
  ): Promise<FormularioAdopcion> {
    return this.formularioAdopcionService.updateEstado(id, updateEstadoDto);
  }
}
