import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SensoresService } from './sensores.service';

@Controller('sensores')
export class SensoresController {
  constructor(private readonly sensoresService: SensoresService) {}

  @Get()
  findAll() {
    return this.sensoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sensoresService.findOne(+id);
  }

  @Post()
  create(@Body() createSensorDto: any) {
    return this.sensoresService.create(createSensorDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSensorDto: any) {
    return this.sensoresService.update(+id, updateSensorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sensoresService.remove(+id);
  }
}
