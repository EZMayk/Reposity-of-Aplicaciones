import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CultivosService } from './cultivos.service';

@Controller('cultivos')
export class CultivosController {
  constructor(private readonly cultivosService: CultivosService) {}

  @Get()
  findAll() {
    return this.cultivosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cultivosService.findOne(+id);
  }

  @Post()
  create(@Body() createCultivoDto: any) {
    return this.cultivosService.create(createCultivoDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCultivoDto: any) {
    return this.cultivosService.update(+id, updateCultivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cultivosService.remove(+id);
  }
}
