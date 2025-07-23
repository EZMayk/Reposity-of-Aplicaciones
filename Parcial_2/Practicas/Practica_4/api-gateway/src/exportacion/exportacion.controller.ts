import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ExportacionService } from './exportacion.service';

@Controller('exportacion')
export class ExportacionController {
  constructor(private readonly exportacionService: ExportacionService) {}

  @Get()
  findAll() {
    return this.exportacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exportacionService.findOne(+id);
  }

  @Post()
  create(@Body() createExportacionDto: any) {
    return this.exportacionService.create(createExportacionDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateExportacionDto: any) {
    return this.exportacionService.update(+id, updateExportacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exportacionService.remove(+id);
  }
}
