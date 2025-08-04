import { IsEnum } from 'class-validator';
import { EstadoSolicitud } from '../interfaces/formulario-adopcion.interface';

export class UpdateEstadoSolicitudDto {
  @IsEnum(EstadoSolicitud, { message: 'El estado debe ser PENDIENTE, APROBADO o RECHAZADO' })
  estado: EstadoSolicitud;
}
