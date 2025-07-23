export class Exportacion {
  id: number;
  numeroLote: string;
  cultivoId: number;
  cantidad: number;
  unidad: string;
  destino: string;
  fechaExportacion: Date;
  precioUnitario: number;
  moneda: string;
  estado: string;
  certificaciones: string[];
  transportista: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<Exportacion>) {
    Object.assign(this, partial);
  }
}
