import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SensoresService {
  constructor(
    @Inject('SENSORES_SERVICE') private client: ClientProxy,
  ) {}

  findAll() {
    return this.client.send({ cmd: 'find_all_sensores' }, {});
  }

  findOne(id: number) {
    return this.client.send({ cmd: 'find_one_sensor' }, { id });
  }

  create(createSensorDto: any) {
    return this.client.send({ cmd: 'create_sensor' }, createSensorDto);
  }

  update(id: number, updateSensorDto: any) {
    return this.client.send({ cmd: 'update_sensor' }, { id, ...updateSensorDto });
  }

  remove(id: number) {
    return this.client.send({ cmd: 'remove_sensor' }, { id });
  }
}
