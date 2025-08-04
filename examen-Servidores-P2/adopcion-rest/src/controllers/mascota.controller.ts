import { Controller, Get, Post, Body, Param, HttpCode, HttpStatus, ValidationPipe } from '@nestjs/common';
import { MascotaService } from '../services/mascota.service';
import { CreateMascotaDto } from '../dto/create-mascota.dto';
import { Mascota } from '../entities/mascota.entity';

@Controller('mascotas')
export class MascotaController {
  constructor(private readonly mascotaService: MascotaService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })) 
    createMascotaDto: CreateMascotaDto
  ): Promise<Mascota> {
    return this.mascotaService.create(createMascotaDto);
  }

  @Get()
  async findAll(): Promise<Mascota[]> {
    return this.mascotaService.findAll();
  }

  @Get('disponibles')
  async findDisponibles(): Promise<Mascota[]> {
    return this.mascotaService.findDisponibles();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Mascota> {
    return this.mascotaService.findOne(id);
  }
}
