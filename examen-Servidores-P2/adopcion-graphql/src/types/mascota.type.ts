import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { IMascota } from '../interfaces/mascota.interface';

@ObjectType()
export class Mascota implements IMascota {
  @Field(() => ID)
  id: string;

  @Field()
  nombre: string;

  @Field()
  especie: string;

  @Field()
  raza: string;

  @Field(() => Int)
  edad: number;

  @Field()
  disponible: boolean;

  constructor(
    id: string,
    nombre: string,
    especie: string,
    raza: string,
    edad: number,
    disponible: boolean = true,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.especie = especie;
    this.raza = raza;
    this.edad = edad;
    this.disponible = disponible;
  }
}
