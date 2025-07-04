import { ObjectType, Field, Float, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // Exponer a GraphQL
@Entity() // Declara la tabla en la base de datos
export class Clima {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  descripcion: string;

  @Field(() => Float)
  @Column('float')
  temperatura: number;

  @Field(() => Float)
  @Column('float')
  humedad: number;

  @Field(() => Float)
  @Column('float')
  viento: number;
}
