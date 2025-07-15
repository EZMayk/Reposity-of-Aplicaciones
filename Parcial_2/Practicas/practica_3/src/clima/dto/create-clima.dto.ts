import { IsString, IsNumber } from 'class-validator';

export class CreateClimaDto {
  @IsString()
  descripcion: string;

  @IsNumber()
  temperatura: number;

  @IsNumber()
  humedad: number;

  @IsNumber()
  viento: number;
}
