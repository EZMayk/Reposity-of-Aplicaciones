import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateClimaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
