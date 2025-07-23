import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ExportacionService } from './exportacion.service';
import { CreateExportacionDto } from './dto/create-exportacion.dto';
import { UpdateExportacionDto } from './dto/update-exportacion.dto';

@Controller()
export class ExportacionController {
  constructor(private readonly exportacionService: ExportacionService) {}

  @MessagePattern({ cmd: 'find_all_exportaciones' })
  findAll() {
    return this.exportacionService.findAll();
  }

  @MessagePattern({ cmd: 'find_one_exportacion' })
  findOne(@Payload() data: { id: number }) {
    return this.exportacionService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'create_exportacion' })
  create(@Payload() createExportacionDto: CreateExportacionDto) {
    return this.exportacionService.create(createExportacionDto);
  }

  @MessagePattern({ cmd: 'update_exportacion' })
  update(@Payload() data: { id: number } & UpdateExportacionDto) {
    const { id, ...updateExportacionDto } = data;
    return this.exportacionService.update(id, updateExportacionDto);
  }

  @MessagePattern({ cmd: 'remove_exportacion' })
  remove(@Payload() data: { id: number }) {
    return this.exportacionService.remove(data.id);
  }
}
