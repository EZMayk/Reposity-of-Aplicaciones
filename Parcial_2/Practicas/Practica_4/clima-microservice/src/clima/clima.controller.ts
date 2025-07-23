import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClimaService } from './clima.service';
import { CreateClimaDto } from './dto/create-clima.dto';
import { UpdateClimaDto } from './dto/update-clima.dto';

@Controller()
export class ClimaController {
  constructor(private readonly climaService: ClimaService) {}

  @MessagePattern({ cmd: 'find_all_clima' })
  findAll() {
    return this.climaService.findAll();
  }

  @MessagePattern({ cmd: 'find_one_clima' })
  findOne(@Payload() data: { id: number }) {
    return this.climaService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'create_clima' })
  create(@Payload() createClimaDto: CreateClimaDto) {
    return this.climaService.create(createClimaDto);
  }

  @MessagePattern({ cmd: 'update_clima' })
  update(@Payload() data: { id: number } & UpdateClimaDto) {
    const { id, ...updateClimaDto } = data;
    return this.climaService.update(id, updateClimaDto);
  }

  @MessagePattern({ cmd: 'remove_clima' })
  remove(@Payload() data: { id: number }) {
    return this.climaService.remove(data.id);
  }
}
