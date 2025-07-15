import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ClimaService } from './clima.service';
import { CreateClimaDto } from './dto/create-clima.dto';
import { UpdateClimaDto } from './dto/update-clima.dto';

@WebSocketGateway({ cors: true })
export class ClimaGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly service: ClimaService) {}

  @SubscribeMessage('clima:create')
  async create(@MessageBody() data: CreateClimaDto) {
    console.log('📥 Clima recibido:', data);
    const result = await this.service.create(data);
    this.server.emit('clima:created', result);
    return result;
  }

@SubscribeMessage('clima:list')
async list() {
  const climas = await this.service.findAll();
  console.log('🔎 Climas encontrados:', climas);
  return climas;
}


  @SubscribeMessage('clima:update')
  async update(@MessageBody() { id, ...data }: UpdateClimaDto & { id: number }) {
    const result = await this.service.update(id, data);
    this.server.emit('clima:updated', result);
    return result;
  }

  @SubscribeMessage('clima:delete')
  async delete(@MessageBody() id: number) {
    console.log('🗑️ Eliminando clima con ID:', id);
    await this.service.remove(id);
    this.server.emit('clima:deleted', id);
    return { id };
  }

}
