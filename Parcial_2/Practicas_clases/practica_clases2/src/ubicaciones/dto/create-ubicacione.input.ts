import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUbicacioneInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
