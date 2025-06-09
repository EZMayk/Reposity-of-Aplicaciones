import { Entrada } from '../entities/EntradaEntity';

export interface EntradaRepository {
    crear(entrada: Entrada): Promise<Entrada>;
    listarPorUsuario(usuarioId: string): Promise<Entrada[]>;
}
