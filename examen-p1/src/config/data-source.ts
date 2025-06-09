import { DataSource } from 'typeorm';
import { Pelicula } from '../domain/entities/PeliculaEntity';
import { Funcion } from '../domain/entities/FuncionEntity';
import { Sala } from '../domain/entities/SalaEntity';
import { Entrada } from '../domain/entities/EntradaEntity';
import { Usuario } from '../domain/entities/UsuarioEntity'; // Faltaba este

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: false,
    entities: [Pelicula, Funcion, Sala, Entrada, Usuario], // Agregado Usuario aquí
});
