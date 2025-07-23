import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ClimaService } from './clima.service';

@Controller('clima')
export class ClimaController {
  constructor(private readonly climaService: ClimaService) {}

  @Get()
  findAll() {
    return this.climaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.climaService.findOne(+id);
  }

  @Post()
  create(@Body() createClimaDto: any) {
    return this.climaService.create(createClimaDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateClimaDto: any) {
    return this.climaService.update(+id, updateClimaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.climaService.remove(+id);
  }
}
