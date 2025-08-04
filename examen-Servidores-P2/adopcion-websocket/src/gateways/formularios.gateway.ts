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
import { FormularioAdopcionService } from '../services/formulario-adopcion.service';
import { UsuarioService } from '../services/usuario.service';
import { MascotaService } from '../services/mascota.service';
import { CreateFormularioAdopcionDto } from '../dto/create-formulario-adopcion.dto';
import { EstadoSolicitud } from '../interfaces/formulario-adopcion.interface';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: '/formularios',
})
export class FormulariosGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('FormulariosGateway');

  constructor(
    private formularioService: FormularioAdopcionService,
    private usuarioService: UsuarioService,
    private mascotaService: MascotaService
  ) {}

  afterInit(server: Server) {
    this.logger.log('Gateway de Formularios inicializado');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Cliente conectado a formularios: ${client.id}`);
    // Enviar lista actual de formularios al cliente recién conectado
    this.getFormulariosWithRelations().then(formularios => {
      client.emit('formularios-list', formularios);
    });
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Cliente desconectado de formularios: ${client.id}`);
  }

  private async getFormulariosWithRelations() {
    const formularios = await this.formularioService.findAll();
    const formulariosWithRelations = await Promise.all(
      formularios.map(async (formulario) => {
        const usuario = await this.usuarioService.findOne(formulario.usuarioId);
        const mascota = await this.mascotaService.findOne(formulario.mascotaId);
        return {
          ...formulario,
          usuario,
          mascota,
        };
      })
    );
    return formulariosWithRelations;
  }

  @SubscribeMessage('get-formularios')
  async handleGetFormularios(@MessageBody() data: any): Promise<any> {
    this.logger.log('Solicitando lista de formularios');
    const formularios = await this.getFormulariosWithRelations();
    return {
      event: 'formularios-list',
      data: formularios,
    };
  }

  @SubscribeMessage('get-formularios-usuario')
  async handleGetFormulariosByUsuario(@MessageBody() data: { usuarioId: string }): Promise<any> {
    this.logger.log(`Solicitando formularios del usuario: ${data.usuarioId}`);
    try {
      const formularios = await this.formularioService.findByUsuario(data.usuarioId);
      const formulariosWithRelations = await Promise.all(
        formularios.map(async (formulario) => {
          const usuario = await this.usuarioService.findOne(formulario.usuarioId);
          const mascota = await this.mascotaService.findOne(formulario.mascotaId);
          return {
            ...formulario,
            usuario,
            mascota,
          };
        })
      );
      return {
        event: 'formularios-usuario-list',
        data: formulariosWithRelations,
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

  @SubscribeMessage('get-formularios-estado')
  async handleGetFormulariosByEstado(@MessageBody() data: { estado: EstadoSolicitud }): Promise<any> {
    this.logger.log(`Solicitando formularios con estado: ${data.estado}`);
    try {
      const formularios = await this.formularioService.findByEstado(data.estado);
      const formulariosWithRelations = await Promise.all(
        formularios.map(async (formulario) => {
          const usuario = await this.usuarioService.findOne(formulario.usuarioId);
          const mascota = await this.mascotaService.findOne(formulario.mascotaId);
          return {
            ...formulario,
            usuario,
            mascota,
          };
        })
      );
      return {
        event: 'formularios-estado-list',
        data: formulariosWithRelations,
      };
    } catch (error) {
      return {
        event: 'error',
        data: {
          message: error.message,
          code: 'INVALID_STATE',
        },
      };
    }
  }

  @SubscribeMessage('get-formulario')
  async handleGetFormulario(@MessageBody() data: { id: string }): Promise<any> {
    this.logger.log(`Solicitando formulario con ID: ${data.id}`);
    try {
      const formulario = await this.formularioService.findOne(data.id);
      const usuario = await this.usuarioService.findOne(formulario.usuarioId);
      const mascota = await this.mascotaService.findOne(formulario.mascotaId);
      
      const formularioWithRelations = {
        ...formulario,
        usuario,
        mascota,
      };

      return {
        event: 'formulario-found',
        data: formularioWithRelations,
      };
    } catch (error) {
      return {
        event: 'error',
        data: {
          message: error.message,
          code: 'FORM_NOT_FOUND',
        },
      };
    }
  }

  @SubscribeMessage('create-formulario')
  @UsePipes(new ValidationPipe({ transform: true }))
  async handleCreateFormulario(@MessageBody() createFormularioDto: CreateFormularioAdopcionDto): Promise<any> {
    this.logger.log('Creando nuevo formulario de adopción');
    
    try {
      const formularioCreado = await this.formularioService.create(createFormularioDto);
      const usuario = await this.usuarioService.findOne(formularioCreado.usuarioId);
      const mascota = await this.mascotaService.findOne(formularioCreado.mascotaId);

      const formularioWithRelations = {
        ...formularioCreado,
        usuario,
        mascota,
      };

      // Notificar a todos los clientes conectados
      this.server.emit('formulario-created', formularioWithRelations);
      const formularios = await this.getFormulariosWithRelations();
      this.server.emit('formularios-list', formularios);

      return {
        event: 'formulario-created',
        data: formularioWithRelations,
      };
    } catch (error) {
      this.logger.error('Error creando formulario:', error);
      return {
        event: 'error',
        data: {
          message: error.message,
          code: error.status === 404 ? 'USER_OR_PET_NOT_FOUND' : 
                error.status === 400 ? 'PET_NOT_AVAILABLE' : 'CREATE_ERROR',
        },
      };
    }
  }

  @SubscribeMessage('approve-formulario')
  async handleApproveFormulario(@MessageBody() data: { id: string }): Promise<any> {
    this.logger.log(`Aprobando formulario con ID: ${data.id}`);
    
    try {
      const formularioActualizado = await this.formularioService.updateEstado(data.id, EstadoSolicitud.APROBADO);
      const usuario = await this.usuarioService.findOne(formularioActualizado.usuarioId);
      const mascota = await this.mascotaService.findOne(formularioActualizado.mascotaId);

      const formularioWithRelations = {
        ...formularioActualizado,
        usuario,
        mascota,
      };

      // Notificar a todos los clientes conectados
      this.server.emit('formulario-approved', formularioWithRelations);
      const formularios = await this.getFormulariosWithRelations();
      this.server.emit('formularios-list', formularios);

      return {
        event: 'formulario-approved',
        data: formularioWithRelations,
      };
    } catch (error) {
      this.logger.error('Error aprobando formulario:', error);
      return {
        event: 'error',
        data: {
          message: error.message,
          code: error.status === 404 ? 'FORM_NOT_FOUND' : 'APPROVE_ERROR',
        },
      };
    }
  }

  @SubscribeMessage('reject-formulario')
  async handleRejectFormulario(@MessageBody() data: { id: string }): Promise<any> {
    this.logger.log(`Rechazando formulario con ID: ${data.id}`);
    
    try {
      const formularioActualizado = await this.formularioService.updateEstado(data.id, EstadoSolicitud.RECHAZADO);
      const usuario = await this.usuarioService.findOne(formularioActualizado.usuarioId);
      const mascota = await this.mascotaService.findOne(formularioActualizado.mascotaId);

      const formularioWithRelations = {
        ...formularioActualizado,
        usuario,
        mascota,
      };

      // Notificar a todos los clientes conectados
      this.server.emit('formulario-rejected', formularioWithRelations);
      const formularios = await this.getFormulariosWithRelations();
      this.server.emit('formularios-list', formularios);

      return {
        event: 'formulario-rejected',
        data: formularioWithRelations,
      };
    } catch (error) {
      this.logger.error('Error rechazando formulario:', error);
      return {
        event: 'error',
        data: {
          message: error.message,
          code: error.status === 404 ? 'FORM_NOT_FOUND' : 'REJECT_ERROR',
        },
      };
    }
  }

  @SubscribeMessage('get-estadisticas')
  async handleGetEstadisticas(@MessageBody() data: any): Promise<any> {
    this.logger.log('Solicitando estadísticas del sistema');
    try {
      const estadisticas = await this.formularioService.getEstadisticas();
      return {
        event: 'estadisticas',
        data: estadisticas,
      };
    } catch (error) {
      this.logger.error('Error obteniendo estadísticas:', error);
      return {
        event: 'error',
        data: {
          message: error.message,
          code: 'STATS_ERROR',
        },
      };
    }
  }
}
