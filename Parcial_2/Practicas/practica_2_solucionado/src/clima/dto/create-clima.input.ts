import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

@InputType()
export class CreateClimaInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @Field()
  @IsNumber()
  temperatura: number;

  @Field()
  @IsNumber()
  humedad: number;

  @Field()
  @IsNumber()
  viento: number;
}
