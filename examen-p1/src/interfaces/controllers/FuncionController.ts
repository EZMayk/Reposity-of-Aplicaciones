import { Request, Response } from 'express';
import { FuncionRepositoryImpl } from '../../infrastructure/repositories/FuncionRepositoryImpl';

const funcionRepository = new FuncionRepositoryImpl();

export class FuncionController {
    static async listarPorPelicula(req: Request, res: Response) {
        try {
            const { peliculaId } = req.params;
            const funciones = await funcionRepository.listarPorPelicula(peliculaId);
            res.json(funciones);
        } catch (error: any) {
            res.status(500).json({ mensaje: 'Error al obtener las funciones.' });
        }
    }
}
