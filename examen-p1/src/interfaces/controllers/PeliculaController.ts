import { Request, Response } from 'express';
import { PeliculaRepositoryImpl } from '../../infrastructure/repositories/PeliculaRepositoryImpl';

const peliculaRepository = new PeliculaRepositoryImpl();

export class PeliculaController {
    static async listar(req: Request, res: Response) {
        try {
            const peliculas = await peliculaRepository.listar();
            res.json(peliculas);
        } catch (error: any) {
            res.status(500).json({ mensaje: 'Error al obtener las películas.' });
        }
    }
}
