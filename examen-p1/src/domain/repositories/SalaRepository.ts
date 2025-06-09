import { Sala } from '../entities/SalaEntity';

export interface SalaRepository {
    listar(): Promise<Sala[]>;
    buscarPorId(id: string): Promise<Sala | null>;
}
