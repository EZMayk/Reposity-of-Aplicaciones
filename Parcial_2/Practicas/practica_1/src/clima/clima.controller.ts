// src/clima/clima.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClimaService } from './clima.service';
import { CreateClimaDto } from './dto/create-clima.dto';
import { UpdateClimaDto } from './dto/update-clima.dto';

@Controller('climas')
export class ClimaController {
  constructor(private readonly climaService: ClimaService) {}

  @Post()
  create(@Body() dto: CreateClimaDto) {
    return this.climaService.create(dto);
  }

  @Get()
  findAll() {
    return this.climaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.climaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateClimaDto) {
    return this.climaService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.climaService.remove(+id);
  }
}
