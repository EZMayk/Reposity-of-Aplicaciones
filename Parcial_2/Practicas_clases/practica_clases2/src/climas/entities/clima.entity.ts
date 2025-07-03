import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Clima {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
