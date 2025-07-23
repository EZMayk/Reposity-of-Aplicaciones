import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CultivosService {
  constructor(
    @Inject('CULTIVOS_SERVICE') private client: ClientProxy,
  ) {}

  findAll() {
    return this.client.send({ cmd: 'find_all_cultivos' }, {});
  }

  findOne(id: number) {
    return this.client.send({ cmd: 'find_one_cultivo' }, { id });
  }

  create(createCultivoDto: any) {
    return this.client.send({ cmd: 'create_cultivo' }, createCultivoDto);
  }

  update(id: number, updateCultivoDto: any) {
    return this.client.send({ cmd: 'update_cultivo' }, { id, ...updateCultivoDto });
  }

  remove(id: number) {
    return this.client.send({ cmd: 'remove_cultivo' }, { id });
  }
}
