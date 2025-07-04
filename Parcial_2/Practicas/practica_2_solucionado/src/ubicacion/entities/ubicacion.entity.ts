import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // Expone este modelo en GraphQL
@Entity() // Declara la tabla en SQLite
export class Ubicacion {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  ciudad: string;

  @Field()
  @Column()
  pais: string;

  @Field()
  @Column('decimal', { precision: 9, scale: 6 }) // Ej: -0.123456
  latitud: number;

  @Field()
  @Column('decimal', { precision: 9, scale: 6 }) // Ej: -80.654321
  longitud: number;
}
