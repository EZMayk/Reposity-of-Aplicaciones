import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IUsuario } from '../interfaces/usuario.interface';

@ObjectType()
export class Usuario implements IUsuario {
  @Field(() => ID)
  id: string;

  @Field()
  nombreCompleto: string;

  @Field()
  email: string;

  @Field()
  telefono: string;

  @Field()
  direccion: string;

  constructor(
    id: string,
    nombreCompleto: string,
    email: string,
    telefono: string,
    direccion: string,
  ) {
    this.id = id;
    this.nombreCompleto = nombreCompleto;
    this.email = email;
    this.telefono = telefono;
    this.direccion = direccion;
  }
}
