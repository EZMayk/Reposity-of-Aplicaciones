import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PlagasService {
  constructor(
    @Inject('PLAGAS_SERVICE') private client: ClientProxy,
  ) {}

  findAll() {
    return this.client.send({ cmd: 'find_all_plagas' }, {});
  }

  findOne(id: number) {
    return this.client.send({ cmd: 'find_one_plaga' }, { id });
  }

  create(createPlagaDto: any) {
    return this.client.send({ cmd: 'create_plaga' }, createPlagaDto);
  }

  update(id: number, updatePlagaDto: any) {
    return this.client.send({ cmd: 'update_plaga' }, { id, ...updatePlagaDto });
  }

  remove(id: number) {
    return this.client.send({ cmd: 'remove_plaga' }, { id });
  }
}
