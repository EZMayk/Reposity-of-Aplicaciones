import { Pelicula } from '../../domain/entities/PeliculaEntity';
import { AppDataSource } from '../../config/data-source';
import { Repository } from 'typeorm';
import { PeliculaRepository } from '../../domain/repositories/PeliculaRepository';

export class PeliculaRepositoryImpl implements PeliculaRepository {
    private repository: Repository<Pelicula>;

    constructor() {
        this.repository = AppDataSource.getRepository(Pelicula);
    }

    async listar(): Promise<Pelicula[]> {
        return this.repository.find();
    }

    async buscarPorId(id: string): Promise<Pelicula | null> {
        return this.repository.findOne({
            where: { id },
        });
    }
}
