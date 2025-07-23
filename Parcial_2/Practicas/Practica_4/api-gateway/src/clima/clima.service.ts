import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ClimaService {
  constructor(
    @Inject('CLIMA_SERVICE') private client: ClientProxy,
  ) {}

  findAll() {
    return this.client.send({ cmd: 'find_all_clima' }, {});
  }

  findOne(id: number) {
    return this.client.send({ cmd: 'find_one_clima' }, { id });
  }

  create(createClimaDto: any) {
    return this.client.send({ cmd: 'create_clima' }, createClimaDto);
  }

  update(id: number, updateClimaDto: any) {
    return this.client.send({ cmd: 'update_clima' }, { id, ...updateClimaDto });
  }

  remove(id: number) {
    return this.client.send({ cmd: 'remove_clima' }, { id });
  }
}
