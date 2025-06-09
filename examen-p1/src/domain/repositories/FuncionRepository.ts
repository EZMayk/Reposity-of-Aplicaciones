import { Funcion } from '../entities/FuncionEntity';

export interface FuncionRepository {
    listarPorPelicula(peliculaId: string): Promise<Funcion[]>;
    buscarPorId(id: string): Promise<Funcion | null>;
    actualizar(funcion: Funcion): Promise<Funcion>;
}
