// src/ubicacion/ubicacion.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';

@Controller('ubicaciones')
export class UbicacionController {
  constructor(private readonly ubicacionService: UbicacionService) {}

  @Post()
  create(@Body() dto: CreateUbicacionDto) {
    return this.ubicacionService.create(dto);
  }

  @Get()
  findAll() {
    return this.ubicacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ubicacionService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUbicacionDto) {
    return this.ubicacionService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ubicacionService.remove(+id);
  }
}
