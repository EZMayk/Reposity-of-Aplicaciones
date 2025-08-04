import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger, ValidationPipe, UsePipes } from '@nestjs/common';
import { MascotaService } from '../services/mascota.service';
import { CreateMascotaDto } from '../dto/create-mascota.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: '/mascotas',
})
export class MascotasGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('MascotasGateway');

  constructor(private mascotaService: MascotaService) {}

  afterInit(server: Server) {
    this.logger.log('Gateway de Mascotas inicializado');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Cliente conectado a mascotas: ${client.id}`);
    // Enviar lista actual de mascotas al cliente recién conectado
    Promise.all([
      this.mascotaService.findAll(),
      this.mascotaService.findAvailable()
    ]).then(([mascotas, mascotasDisponibles]) => {
      client.emit('mascotas-list', mascotas);
      client.emit('mascotas-disponibles-list', mascotasDisponibles);
    });
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Cliente desconectado de mascotas: ${client.id}`);
  }

  @SubscribeMessage('get-mascotas')
  async handleGetMascotas(@MessageBody() data: any): Promise<any> {
    this.logger.log('Solicitando lista de mascotas');
    const mascotas = await this.mascotaService.findAll();
    return {
      event: 'mascotas-list',
      data: mascotas,
    };
  }

  @SubscribeMessage('get-mascotas-disponibles')
  async handleGetMascotasDisponibles(@MessageBody() data: any): Promise<any> {
    this.logger.log('Solicitando lista de mascotas disponibles');
    const mascotasDisponibles = await this.mascotaService.findAvailable();
    return {
      event: 'mascotas-disponibles-list',
      data: mascotasDisponibles,
    };
  }

  @SubscribeMessage('get-mascota')
  async handleGetMascota(@MessageBody() data: { id: string }): Promise<any> {
    this.logger.log(`Solicitando mascota con ID: ${data.id}`);
    try {
      const mascota = await this.mascotaService.findOne(data.id);
      return {
        event: 'mascota-found',
        data: mascota,
      };
    } catch (error) {
      return {
        event: 'error',
        data: {
          message: error.message,
          code: 'PET_NOT_FOUND',
        },
      };
    }
  }

  @SubscribeMessage('create-mascota')
  @UsePipes(new ValidationPipe({ transform: true }))
  async handleCreateMascota(@MessageBody() createMascotaDto: CreateMascotaDto): Promise<any> {
    this.logger.log('Creando nueva mascota');
    
    try {
      const mascotaCreada = await this.mascotaService.create(createMascotaDto);

      // Notificar a todos los clientes conectados
      this.server.emit('mascota-created', mascotaCreada);
      const mascotas = await this.mascotaService.findAll();
      const mascotasDisponibles = await this.mascotaService.findAvailable();
      this.server.emit('mascotas-list', mascotas);
      this.server.emit('mascotas-disponibles-list', mascotasDisponibles);

      return {
        event: 'mascota-created',
        data: mascotaCreada,
      };
    } catch (error) {
      this.logger.error('Error creando mascota:', error);
      return {
        event: 'error',
        data: {
          message: error.message,
          code: 'CREATE_ERROR',
        },
      };
    }
  }

  @SubscribeMessage('update-mascota')
  @UsePipes(new ValidationPipe({ transform: true }))
  async handleUpdateMascota(@MessageBody() data: { id: string; updateData: Partial<CreateMascotaDto> }): Promise<any> {
    this.logger.log(`Actualizando mascota con ID: ${data.id}`);
    
    try {
      const mascotaActualizada = await this.mascotaService.update(data.id, data.updateData);

      // Notificar a todos los clientes conectados
      this.server.emit('mascota-updated', mascotaActualizada);
      const mascotas = await this.mascotaService.findAll();
      const mascotasDisponibles = await this.mascotaService.findAvailable();
      this.server.emit('mascotas-list', mascotas);
      this.server.emit('mascotas-disponibles-list', mascotasDisponibles);

      return {
        event: 'mascota-updated',
        data: mascotaActualizada,
      };
    } catch (error) {
      this.logger.error('Error actualizando mascota:', error);
      return {
        event: 'error',
        data: {
          message: error.message,
          code: error.name === 'NotFoundException' ? 'PET_NOT_FOUND' : 'UPDATE_ERROR',
        },
      };
    }
  }

  @SubscribeMessage('delete-mascota')
  async handleDeleteMascota(@MessageBody() data: { id: string }): Promise<any> {
    this.logger.log(`Eliminando mascota con ID: ${data.id}`);
    
    try {
      await this.mascotaService.remove(data.id);

      // Notificar a todos los clientes conectados
      this.server.emit('mascota-deleted', { id: data.id });
      const mascotas = await this.mascotaService.findAll();
      const mascotasDisponibles = await this.mascotaService.findAvailable();
      this.server.emit('mascotas-list', mascotas);
      this.server.emit('mascotas-disponibles-list', mascotasDisponibles);

      return {
        event: 'mascota-deleted',
        data: { id: data.id },
      };
    } catch (error) {
      this.logger.error('Error eliminando mascota:', error);
      return {
        event: 'error',
        data: {
          message: error.message,
          code: 'DELETE_ERROR',
        },
      };
    }
  }
}
