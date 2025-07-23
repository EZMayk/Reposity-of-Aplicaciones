import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCiudadanoDto } from './dto/create-ciudadano.dto';
import { UpdateCiudadanoDto } from './dto/update-ciudadano.dto';

@Injectable()
export class CiudadanosService {
  constructor(
    @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
  ) {}

  create(createCiudadanoDto: CreateCiudadanoDto) {
    return this.natsClient.send('createCiudadano', createCiudadanoDto);
  }

  findAll() {
    return this.natsClient.send('findAllCiudadanos', {});
  }

  findOne(id: number) {
    return this.natsClient.send('findOneCiudadano', id);
  }

  update(id: number, updateCiudadanoDto: UpdateCiudadanoDto) {
    return this.natsClient.send('updateCiudadano', { id, updateCiudadanoDto });
  }

  remove(id: number) {
    return this.natsClient.send('removeCiudadano', id);
  }
}
