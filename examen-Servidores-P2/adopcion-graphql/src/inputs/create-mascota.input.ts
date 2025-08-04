import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsNumber, IsBoolean, Min, IsOptional } from 'class-validator';

@InputType()
export class CreateMascotaInput {
  @Field()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  nombre: string;

  @Field()
  @IsNotEmpty({ message: 'La especie es requerida' })
  @IsString({ message: 'La especie debe ser una cadena de texto' })
  especie: string;

  @Field()
  @IsNotEmpty({ message: 'La raza es requerida' })
  @IsString({ message: 'La raza debe ser una cadena de texto' })
  raza: string;

  @Field(() => Int)
  @IsNotEmpty({ message: 'La edad es requerida' })
  @IsNumber({}, { message: 'La edad debe ser un número' })
  @Min(0, { message: 'La edad no puede ser negativa' })
  edad: number;

  @Field({ nullable: true, defaultValue: true })
  @IsOptional()
  @IsBoolean({ message: 'Disponible debe ser un valor booleano' })
  disponible?: boolean = true;
}
