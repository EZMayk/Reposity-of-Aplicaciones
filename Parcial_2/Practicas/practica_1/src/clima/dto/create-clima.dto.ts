// src/clima/dto/create-clima.dto.ts
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateClimaDto {
  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsNumber()
  temperatura: number;

  @IsNotEmpty()
  @IsNumber()
  humedad: number;

  @IsNotEmpty()
  @IsNumber()
  viento: number;
}
