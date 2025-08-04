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
import { UsuarioService } from '../services/usuario.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: '/usuarios',
})
export class UsuariosGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('UsuariosGateway');

  constructor(private usuarioService: UsuarioService) {}

  afterInit(server: Server) {
    this.logger.log('Gateway de Usuarios inicializado');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Cliente conectado a usuarios: ${client.id}`);
    // Enviar lista actual de usuarios al cliente recién conectado
    this.usuarioService.findAll().then(usuarios => {
      client.emit('usuarios-list', usuarios);
    });
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Cliente desconectado de usuarios: ${client.id}`);
  }

  @SubscribeMessage('get-usuarios')
  async handleGetUsuarios(@MessageBody() data: any): Promise<any> {
    this.logger.log('Solicitando lista de usuarios');
    const usuarios = await this.usuarioService.findAll();
    return {
      event: 'usuarios-list',
      data: usuarios,
    };
  }

  @SubscribeMessage('get-usuario')
  async handleGetUsuario(@MessageBody() data: { id: string }): Promise<any> {
    this.logger.log(`Solicitando usuario con ID: ${data.id}`);
    try {
      const usuario = await this.usuarioService.findOne(data.id);
      return {
        event: 'usuario-found',
        data: usuario,
      };
    } catch (error) {
      return {
        event: 'error',
        data: {
          message: error.message,
          code: 'USER_NOT_FOUND',
        },
      };
    }
  }

  @SubscribeMessage('create-usuario')
  @UsePipes(new ValidationPipe({ transform: true }))
  async handleCreateUsuario(@MessageBody() createUsuarioDto: CreateUsuarioDto): Promise<any> {
    this.logger.log('Creando nuevo usuario');
    
    try {
      const usuarioCreado = await this.usuarioService.create(createUsuarioDto);

      // Notificar a todos los clientes conectados
      this.server.emit('usuario-created', usuarioCreado);
      const usuarios = await this.usuarioService.findAll();
      this.server.emit('usuarios-list', usuarios);

      return {
        event: 'usuario-created',
        data: usuarioCreado,
      };
    } catch (error) {
      this.logger.error('Error creando usuario:', error);
      return {
        event: 'error',
        data: {
          message: error.message,
          code: error.name === 'ConflictException' ? 'EMAIL_ALREADY_EXISTS' : 'CREATE_ERROR',
        },
      };
    }
  }

  @SubscribeMessage('update-usuario')
  @UsePipes(new ValidationPipe({ transform: true }))
  async handleUpdateUsuario(@MessageBody() data: { id: string; updateData: Partial<CreateUsuarioDto> }): Promise<any> {
    this.logger.log(`Actualizando usuario con ID: ${data.id}`);
    
    try {
      const usuarioActualizado = await this.usuarioService.update(data.id, data.updateData);

      // Notificar a todos los clientes conectados
      this.server.emit('usuario-updated', usuarioActualizado);
      const usuarios = await this.usuarioService.findAll();
      this.server.emit('usuarios-list', usuarios);

      return {
        event: 'usuario-updated',
        data: usuarioActualizado,
      };
    } catch (error) {
      this.logger.error('Error actualizando usuario:', error);
      return {
        event: 'error',
        data: {
          message: error.message,
          code: error.name === 'NotFoundException' ? 'USER_NOT_FOUND' : 'UPDATE_ERROR',
        },
      };
    }
  }

  @SubscribeMessage('delete-usuario')
  async handleDeleteUsuario(@MessageBody() data: { id: string }): Promise<any> {
    this.logger.log(`Eliminando usuario con ID: ${data.id}`);
    
    try {
      await this.usuarioService.remove(data.id);

      // Notificar a todos los clientes conectados
      this.server.emit('usuario-deleted', { id: data.id });
      const usuarios = await this.usuarioService.findAll();
      this.server.emit('usuarios-list', usuarios);

      return {
        event: 'usuario-deleted',
        data: { id: data.id },
      };
    } catch (error) {
      this.logger.error('Error eliminando usuario:', error);
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
