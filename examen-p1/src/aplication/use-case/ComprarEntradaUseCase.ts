import { EntradaRepository } from '../../domain/repositories/EntradaRepository';
import { FuncionRepository } from '../../domain/repositories/FuncionRepository';
import { UsuarioRepository } from '../../domain/repositories/UsuarioRepository';
import { ComprarEntradaDto } from '../../dtos/ComprarEntradaDto';
import { Entrada } from '../../domain/entities/EntradaEntity';

export class ComprarEntradaUseCase {
    constructor(
        private entradaRepository: EntradaRepository,
        private funcionRepository: FuncionRepository,
        private usuarioRepository: UsuarioRepository
    ) {}

    async ejecutar(dto: ComprarEntradaDto): Promise<Entrada> {
        const usuario = await this.usuarioRepository.buscarPorId(dto.usuarioId);
        if (!usuario) {
            throw new Error('Usuario no encontrado.');
        }

        const funcion = await this.funcionRepository.buscarPorId(dto.funcionId);
        if (!funcion || !funcion.activa) {
            throw new Error('Función no disponible.');
        }

        if (funcion.entradasDisponibles <= 0) {
            throw new Error('No hay entradas disponibles.');
        }

        const entrada = new Entrada();
        entrada.usuario = usuario;
        entrada.funcion = funcion;
        entrada.estado = 'activa';
        entrada.fechaCompra = new Date();

        funcion.entradasDisponibles -= 1;
        await this.funcionRepository.actualizar(funcion);

        return this.entradaRepository.crear(entrada);
    }
}
