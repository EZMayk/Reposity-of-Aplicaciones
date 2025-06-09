import { Router, Request, Response, NextFunction } from 'express';
import { UsuarioController } from '../controllers/UsuarioController';
import { EntradaController } from '../controllers/EntradaController';
import { PeliculaController } from '../controllers/PeliculaController';
import { FuncionController } from '../controllers/FuncionController';

// Wrapper para manejar async/await en Express y evitar errores no capturados
const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

const router = Router();

router.post('/usuario', asyncHandler(UsuarioController.registrar));
router.post('/entradas', asyncHandler(EntradaController.comprar));
router.get('/peliculas', asyncHandler(PeliculaController.listar));
router.get('/funciones/:peliculaId', asyncHandler(FuncionController.listarPorPelicula));

export default router;
