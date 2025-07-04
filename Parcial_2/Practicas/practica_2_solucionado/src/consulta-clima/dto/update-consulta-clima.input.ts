import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateConsultaClimaInput } from './create-consulta-clima.input';

@InputType()
export class UpdateConsultaClimaInput extends PartialType(CreateConsultaClimaInput) {
@Field(() => Int)
id: number;
}