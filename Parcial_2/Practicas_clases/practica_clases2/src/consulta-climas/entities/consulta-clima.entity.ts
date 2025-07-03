import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ConsultaClima {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
