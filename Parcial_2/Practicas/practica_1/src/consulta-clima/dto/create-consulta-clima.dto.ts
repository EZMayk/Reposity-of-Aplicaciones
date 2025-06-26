// src/consultaclima/dto/create-consultaclima.dto.ts
import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateConsultaClimaDto {
  @IsNotEmpty()
  @IsDateString()
  fecha: Date;

  @IsNotEmpty()
  @IsNumber()
  ubicacionId: number;

  @IsNotEmpty()
  @IsNumber()
  climaId: number;
}
