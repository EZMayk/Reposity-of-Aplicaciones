import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { UbicacionService } from './ubicacion.service';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';

@WebSocketGateway({ cors: true })
export class UbicacionGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly service: UbicacionService) {}

  @SubscribeMessage('ubicacion:create')
  async create(@MessageBody() data: CreateUbicacionDto) {
    console.log('📥 Recibido en WebSocket:', data);
    const result = await this.service.create(data);
    this.server.emit('ubicacion:created', result);
    return result;
  }

  @SubscribeMessage('ubicacion:list')
  async list() {
    const data = await this.service.findAll();
    this.server.emit('ubicacion:listed', data);
    
    console.log('🔎 Lista de ubicaciones desde .find():', data);
    return data;
  }

  @SubscribeMessage('ubicacion:update')
  async update(@MessageBody() payload: UpdateUbicacionDto & { id: number }) {
    console.log('✏️ Payload recibido:', payload);
    const { id, ...data } = payload;
    const result = await this.service.update(id, data);
    this.server.emit('ubicacion:updated', result);
  return result;
  }

  @SubscribeMessage('ubicacion:delete')
  async remove(@MessageBody() id: number) {
    await this.service.remove(id);
    this.server.emit('ubicacion:deleted', id);
    return { id };
  }
}
