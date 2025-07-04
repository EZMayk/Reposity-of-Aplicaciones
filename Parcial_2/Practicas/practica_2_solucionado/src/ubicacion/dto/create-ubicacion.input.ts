import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

@InputType()
export class CreateUbicacionInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  ciudad: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  pais: string;

  @Field()
  @IsNumber()
  latitud: number;

  @Field()
  @IsNumber()
  longitud: number;
}
