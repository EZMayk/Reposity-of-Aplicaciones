export class Plaga {
  id: number;
  nombre: string;
  tipo: string;
  nivelInfestacion: string;
  descripcion: string;
  tratamiento: string;
  fechaDeteccion: Date;
  cultivoAfectado: number;
  ubicacion: string;
  estado: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<Plaga>) {
    Object.assign(this, partial);
  }
}
