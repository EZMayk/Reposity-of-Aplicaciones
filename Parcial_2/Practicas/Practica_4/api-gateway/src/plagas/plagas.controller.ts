import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PlagasService } from './plagas.service';

@Controller('plagas')
export class PlagasController {
  constructor(private readonly plagasService: PlagasService) {}

  @Get()
  findAll() {
    return this.plagasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plagasService.findOne(+id);
  }

  @Post()
  create(@Body() createPlagaDto: any) {
    return this.plagasService.create(createPlagaDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlagaDto: any) {
    return this.plagasService.update(+id, updatePlagaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plagasService.remove(+id);
  }
}
