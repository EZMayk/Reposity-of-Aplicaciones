import { Request, Response } from 'express';
import { ComprarEntradaUseCase } from '../../aplication/use-case/ComprarEntradaUseCase';
import { EntradaRepositoryImpl } from '../../infrastructure/repositories/EntradaRepositoryImpl';
import { FuncionRepositoryImpl } from '../../infrastructure/repositories/FuncionRepositoryImpl';
import { UsuarioRepositoryImpl } from '../../infrastructure/repositories/UsuarioRepositoryImpl';
import { ComprarEntradaDto } from '../../dtos/ComprarEntradaDto';
import { validate } from 'class-validator';

const entradaRepository = new EntradaRepositoryImpl();
const funcionRepository = new FuncionRepositoryImpl();
const usuarioRepository = new UsuarioRepositoryImpl();

const comprarEntradaUseCase = new ComprarEntradaUseCase(
    entradaRepository,
    funcionRepository,
    usuarioRepository
);

export class EntradaController {
    static async comprar(req: Request, res: Response) {
        const dto = Object.assign(new ComprarEntradaDto(), req.body);
        const errores = await validate(dto);
        if (errores.length > 0) {
            return res.status(400).json(errores);
        }

        try {
            const entrada = await comprarEntradaUseCase.ejecutar(dto);
            res.status(201).json(entrada);
        } catch (error: any) {
            res.status(400).json({ mensaje: error.message });
        }
    }
}
