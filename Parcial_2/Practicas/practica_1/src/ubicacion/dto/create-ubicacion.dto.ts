// src/ubicacion/dto/create-ubicacion.dto.ts
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateUbicacionDto {
  @IsNotEmpty()
  @IsString()
  ciudad: string;

  @IsNotEmpty()
  @IsString()
  pais: string;

  @IsNotEmpty()
  @IsNumber()
  latitud: number;

  @IsNotEmpty()
  @IsNumber()
  longitud: number;
}
