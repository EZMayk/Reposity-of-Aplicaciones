import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CiudadanosService } from './ciudadanos.service';
import { CreateCiudadanoDto } from './dto/create-ciudadano.dto';
import { UpdateCiudadanoDto } from './dto/update-ciudadano.dto';

@Controller('ciudadanos')
export class CiudadanosController {
  constructor(private readonly ciudadanosService: CiudadanosService) {}

  @MessagePattern('createCiudadano')
  create(@Payload() createCiudadanoDto: CreateCiudadanoDto) {
    return this.ciudadanosService.create(createCiudadanoDto);
  }

  @MessagePattern('findAllCiudadanos')
  findAll() {
    return this.ciudadanosService.findAll();
  }

  @MessagePattern('findOneCiudadano')
  findOne(@Payload() id: number) {
    return this.ciudadanosService.findOne(id);
  }

  @MessagePattern('updateCiudadano')
  update(@Payload() payload: { id: number; updateCiudadanoDto: UpdateCiudadanoDto }) {
    return this.ciudadanosService.update(payload.id, payload.updateCiudadanoDto);
  }

  @MessagePattern('removeCiudadano')
  remove(@Payload() id: number) {
    return this.ciudadanosService.remove(id);
  }
}
