import { IMascota } from '../interfaces/mascota.interface';

export class Mascota implements IMascota {
  id: string;
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
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
