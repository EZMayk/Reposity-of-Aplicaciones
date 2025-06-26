// src/consultaclima/consultaclima.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ConsultaClimaService } from './consulta-clima.service';
import { CreateConsultaClimaDto } from './dto/create-consulta-clima.dto';
import { UpdateConsultaClimaDto } from './dto/update-consulta-clima.dto';

@Controller('consultas')
export class ConsultaClimaController {
  constructor(private readonly consultaService: ConsultaClimaService) {}

  @Post()
  create(@Body() dto: CreateConsultaClimaDto) {
    return this.consultaService.create(dto);
  }

  @Get()
  findAll() {
    return this.consultaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consultaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateConsultaClimaDto) {
    return this.consultaService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultaService.remove(+id);
  }
}
