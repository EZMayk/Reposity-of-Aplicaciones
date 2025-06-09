import { Request, Response } from 'express';
import { RegistrarUsuarioUseCase } from '../../aplication/use-case/RegistrarUsuarioUseCase';
import { UsuarioRepositoryImpl } from '../../infrastructure/repositories/UsuarioRepositoryImpl';
import { RegistrarUsuarioDto } from '../../dtos/RegistrarUsuarioDto';
import { validate } from 'class-validator';

const usuarioRepository = new UsuarioRepositoryImpl();
const registrarUsuarioUseCase = new RegistrarUsuarioUseCase(usuarioRepository);

export class UsuarioController {
    static async registrar(req: Request, res: Response) {
        const dto = Object.assign(new RegistrarUsuarioDto(), req.body);
        const errores = await validate(dto);
        if (errores.length > 0) {
            return res.status(400).json(errores);
        }

        try {
            const usuario = await registrarUsuarioUseCase.ejecutar(dto);
            res.status(201).json(usuario);
        } catch (error: any) {
            res.status(400).json({ mensaje: error.message });
        }
    }
}
