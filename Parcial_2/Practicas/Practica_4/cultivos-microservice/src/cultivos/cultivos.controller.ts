import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CultivosService } from './cultivos.service';
import { CreateCultivoDto } from './dto/create-cultivo.dto';
import { UpdateCultivoDto } from './dto/update-cultivo.dto';

@Controller()
export class CultivosController {
  constructor(private readonly cultivosService: CultivosService) {}

  @MessagePattern({ cmd: 'find_all_cultivos' })
  findAll() {
    return this.cultivosService.findAll();
  }

  @MessagePattern({ cmd: 'find_one_cultivo' })
  findOne(@Payload() data: { id: number }) {
    return this.cultivosService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'create_cultivo' })
  create(@Payload() createCultivoDto: CreateCultivoDto) {
    return this.cultivosService.create(createCultivoDto);
  }

  @MessagePattern({ cmd: 'update_cultivo' })
  update(@Payload() data: { id: number } & UpdateCultivoDto) {
    const { id, ...updateCultivoDto } = data;
    return this.cultivosService.update(id, updateCultivoDto);
  }

  @MessagePattern({ cmd: 'remove_cultivo' })
  remove(@Payload() data: { id: number }) {
    return this.cultivosService.remove(data.id);
  }
}
