import { IFormularioAdopcion, EstadoSolicitud } from '../interfaces/formulario-adopcion.interface';

export class FormularioAdopcion implements IFormularioAdopcion {
  id: string;
  usuarioId: string;
  mascotaId: string;
  haTenidoMascotasAntes: boolean;
  tipoVivienda: string;
  fechaSolicitud: Date;
  estado: EstadoSolicitud;

  constructor(
    id: string,
    usuarioId: string,
    mascotaId: string,
    haTenidoMascotasAntes: boolean,
    tipoVivienda: string,
    fechaSolicitud: Date = new Date(),
    estado: EstadoSolicitud = EstadoSolicitud.PENDIENTE,
  ) {
    this.id = id;
    this.usuarioId = usuarioId;
    this.mascotaId = mascotaId;
    this.haTenidoMascotasAntes = haTenidoMascotasAntes;
    this.tipoVivienda = tipoVivienda;
    this.fechaSolicitud = fechaSolicitud;
    this.estado = estado;
  }
}
