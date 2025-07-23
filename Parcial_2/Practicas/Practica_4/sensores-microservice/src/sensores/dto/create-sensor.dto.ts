export class CreateSensorDto {
  tipo: string;
  ubicacion: string;
  estado: string;
  valor: number;
  unidad: string;
  fechaLectura: Date;
  cultivoId: number;
}
