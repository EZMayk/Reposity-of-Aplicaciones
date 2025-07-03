import { CreateClimaInput } from './create-clima.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateClimaInput extends PartialType(CreateClimaInput) {
  @Field(() => Int)
  id: number;
}
