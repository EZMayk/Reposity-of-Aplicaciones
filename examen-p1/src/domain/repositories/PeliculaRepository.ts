import { Pelicula } from '../entities/PeliculaEntity';

export interface PeliculaRepository {
    listar(): Promise<Pelicula[]>;
    buscarPorId(id: string): Promise<Pelicula | null>;
}
