import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateConsultaClimaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
