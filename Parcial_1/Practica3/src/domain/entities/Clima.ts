export class Clima {
  constructor(
    public id: number,
    public temperatura: number,
    public humedad: number,
    public velocidadViento: number,
    public fechaRegistro: Date,
    public zonaCultivo: string
  ) {}
}
