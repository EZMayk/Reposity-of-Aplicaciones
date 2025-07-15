// dto/create-ubicacion.dto.ts
import { IsString } from 'class-validator';

export class CreateUbicacionDto {
  @IsString()
  ciudad: string;

  @IsString()
  pais: string;

  @IsString()
  latitud: string;

  @IsString()
  longitud: string;
}
