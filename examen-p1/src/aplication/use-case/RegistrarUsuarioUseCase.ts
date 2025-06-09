import { UsuarioRepository } from '../../domain/repositories/UsuarioRepository';
import { Usuario } from '../../domain/entities/UsuarioEntity';
import { RegistrarUsuarioDto } from '../../dtos/RegistrarUsuarioDto';

export class RegistrarUsuarioUseCase {
    constructor(private usuarioRepository: UsuarioRepository) {}

    async ejecutar(dto: RegistrarUsuarioDto): Promise<Usuario> {
        const existe = await this.usuarioRepository.buscarPorCorreo(dto.correo);
        if (existe) {
            throw new Error('El correo ya está registrado.');
        }

        const nuevoUsuario = new Usuario();
        nuevoUsuario.nombre = dto.nombre;
        nuevoUsuario.correo = dto.correo;
        nuevoUsuario.contraseña = dto.contraseña;

        return this.usuarioRepository.crear(nuevoUsuario);
    }
}
