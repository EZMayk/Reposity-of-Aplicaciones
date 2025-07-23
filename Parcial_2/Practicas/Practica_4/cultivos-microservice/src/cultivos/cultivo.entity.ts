export class Cultivo {
  id: number;
  nombre: string;
  tipoSuelo: string;
  fechaSiembra: Date;
  fechaCosecha: Date;
  estado: string;
  area: number;
  ubicacion: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<Cultivo>) {
    Object.assign(this, partial);
  }
}
