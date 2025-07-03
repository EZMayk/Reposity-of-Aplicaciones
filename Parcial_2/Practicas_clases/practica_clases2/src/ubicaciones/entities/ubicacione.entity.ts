import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Ubicacione {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
