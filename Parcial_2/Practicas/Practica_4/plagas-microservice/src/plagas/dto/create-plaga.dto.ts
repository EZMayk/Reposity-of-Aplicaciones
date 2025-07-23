export class CreatePlagaDto {
  nombre: string;
  tipo: string;
  nivelInfestacion: string;
  descripcion: string;
  tratamiento: string;
  fechaDeteccion: Date;
  cultivoAfectado: number;
  ubicacion: string;
  estado: string;
}
