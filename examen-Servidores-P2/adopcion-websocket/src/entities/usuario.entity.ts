import { IUsuario } from '../interfaces/usuario.interface';

export class Usuario implements IUsuario {
  id: string;
  nombreCompleto: string;
  email: string;
  telefono: string;
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
