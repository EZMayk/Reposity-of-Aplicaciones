import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateClimaInput } from './create-clima.input';

@InputType()
export class UpdateClimaInput extends PartialType(CreateClimaInput) {
  @Field()
  id: number;
}
