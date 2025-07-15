import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ConsultaClimaService } from './consulta-clima.service';
import { CreateConsultaClimaDto } from './dto/create-consulta-clima.dto';
import { UpdateConsultaClimaDto } from './dto/update-consulta-clima.dto';

@WebSocketGateway({ cors: true })
export class ConsultaClimaGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly service: ConsultaClimaService) {}

  @SubscribeMessage('consulta:create')
  async create(@MessageBody() data: CreateConsultaClimaDto) {
    console.log('📥 Consulta de clima recibida:', data);
    const result = await this.service.create(data);
    this.server.emit('consulta:created', result);
    return result;
  }

  @SubscribeMessage('consulta:list')
  async list() {
    const consultas = await this.service.findAll();
    console.log('🔎 Consultas de clima encontradas:', consultas);
    return await this.service.findAll();
  }

  @SubscribeMessage('consulta:update')
  async update(@MessageBody() data: UpdateConsultaClimaDto) {
    const result = await this.service.update(data.id, data);
    console.log('🔄 Consulta de clima actualizada:', result);
    this.server.emit('consulta:updated', result);
    return result;
  }

  @SubscribeMessage('consulta:delete')
  async delete(@MessageBody() id: number) {
    await this.service.remove(id);
    this.server.emit('consulta:deleted', id);
    return { id };
  }
}
