export enum EstadoSolicitud {
  PENDIENTE = 'PENDIENTE',
  APROBADO = 'APROBADO', 
  RECHAZADO = 'RECHAZADO'
}

export interface IFormularioAdopcion {
  id: string;
  usuarioId: string;
  mascotaId: string;
  haTenidoMascotasAntes: boolean;
  tipoVivienda: string;
  fechaSolicitud: Date;
  estado: EstadoSolicitud;
}
