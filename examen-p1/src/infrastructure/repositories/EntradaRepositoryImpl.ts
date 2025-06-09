import { Entrada } from '../../domain/entities/EntradaEntity';
import { AppDataSource } from '../../config/data-source';
import { Repository } from 'typeorm';
import { EntradaRepository } from '../../domain/repositories/EntradaRepository';

export class EntradaRepositoryImpl implements EntradaRepository {
    private repository: Repository<Entrada>;

    constructor() {
        this.repository = AppDataSource.getRepository(Entrada);
    }

    async crear(entrada: Entrada): Promise<Entrada> {
        return this.repository.save(entrada);
    }

async listarPorUsuario(usuarioId: string): Promise<Entrada[]> {
    return this.repository.find({
        where: {
            usuario: {
                id: usuarioId,
            },
        },
        relations: ['usuario'], // Opcional: incluye los datos del usuario en el resultado
    });
}
}
