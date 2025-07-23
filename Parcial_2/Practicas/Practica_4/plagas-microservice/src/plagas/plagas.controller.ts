import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PlagasService } from './plagas.service';
import { CreatePlagaDto } from './dto/create-plaga.dto';
import { UpdatePlagaDto } from './dto/update-plaga.dto';

@Controller()
export class PlagasController {
  constructor(private readonly plagasService: PlagasService) {}

  @MessagePattern({ cmd: 'find_all_plagas' })
  findAll() {
    return this.plagasService.findAll();
  }

  @MessagePattern({ cmd: 'find_one_plaga' })
  findOne(@Payload() data: { id: number }) {
    return this.plagasService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'create_plaga' })
  create(@Payload() createPlagaDto: CreatePlagaDto) {
    return this.plagasService.create(createPlagaDto);
  }

  @MessagePattern({ cmd: 'update_plaga' })
  update(@Payload() data: { id: number } & UpdatePlagaDto) {
    const { id, ...updatePlagaDto } = data;
    return this.plagasService.update(id, updatePlagaDto);
  }

  @MessagePattern({ cmd: 'remove_plaga' })
  remove(@Payload() data: { id: number }) {
    return this.plagasService.remove(data.id);
  }
}
