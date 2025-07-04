import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsDateString } from 'class-validator';

@InputType()
export class CreateConsultaClimaInput {
@Field()
@IsDateString()
fechaConsulta: string;

@Field(() => Int)
@IsInt()
ubicacionId: number;

@Field(() => Int)
@IsInt()
climaId: number;
}