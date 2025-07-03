import { CreateConsultaClimaInput } from './create-consulta-clima.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateConsultaClimaInput extends PartialType(CreateConsultaClimaInput) {
  @Field(() => Int)
  id: number;
}
