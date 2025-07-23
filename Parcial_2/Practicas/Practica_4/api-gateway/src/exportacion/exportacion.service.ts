import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ExportacionService {
  constructor(
    @Inject('EXPORTACION_SERVICE') private client: ClientProxy,
  ) {}

  findAll() {
    return this.client.send({ cmd: 'find_all_exportaciones' }, {});
  }

  findOne(id: number) {
    return this.client.send({ cmd: 'find_one_exportacion' }, { id });
  }

  create(createExportacionDto: any) {
    return this.client.send({ cmd: 'create_exportacion' }, createExportacionDto);
  }

  update(id: number, updateExportacionDto: any) {
    return this.client.send({ cmd: 'update_exportacion' }, { id, ...updateExportacionDto });
  }

  remove(id: number) {
    return this.client.send({ cmd: 'remove_exportacion' }, { id });
  }
}
