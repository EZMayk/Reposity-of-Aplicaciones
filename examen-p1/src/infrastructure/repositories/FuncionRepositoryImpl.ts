import { Funcion } from '../../domain/entities/FuncionEntity';
import { AppDataSource } from '../../config/data-source';
import { Repository } from 'typeorm';
import { FuncionRepository } from '../../domain/repositories/FuncionRepository';

export class FuncionRepositoryImpl implements FuncionRepository {
    private repository: Repository<Funcion>;

    constructor() {
        this.repository = AppDataSource.getRepository(Funcion);
    }

    async listarPorPelicula(peliculaId: string): Promise<Funcion[]> {
        return this.repository.find({
            where: {
                pelicula: {
                    id: peliculaId,
                },
            },
            relations: ['sala', 'pelicula'],
        });
    }

    async buscarPorId(id: string): Promise<Funcion | null> {
        return this.repository.findOne({
            where: { id },
            relations: ['sala', 'pelicula'],
        });
    }

    async actualizar(funcion: Funcion): Promise<Funcion> {
        return this.repository.save(funcion);
}
}
