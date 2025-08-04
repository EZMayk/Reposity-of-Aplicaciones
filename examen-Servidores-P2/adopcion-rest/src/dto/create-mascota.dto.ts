import { IsNotEmpty, IsString, IsNumber, IsBoolean, Min } from 'class-validator';

export class CreateMascotaDto {
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  nombre: string;

  @IsNotEmpty({ message: 'La especie es requerida' })
  @IsString({ message: 'La especie debe ser una cadena de texto' })
  especie: string;

  @IsNotEmpty({ message: 'La raza es requerida' })
  @IsString({ message: 'La raza debe ser una cadena de texto' })
  raza: string;

  @IsNotEmpty({ message: 'La edad es requerida' })
  @IsNumber({}, { message: 'La edad debe ser un número' })
  @Min(0, { message: 'La edad no puede ser negativa' })
  edad: number;

  @IsBoolean({ message: 'Disponible debe ser un valor booleano' })
  disponible?: boolean = true;
}
