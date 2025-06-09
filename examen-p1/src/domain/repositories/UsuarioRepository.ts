import { Usuario } from '../entities/UsuarioEntity';

export interface UsuarioRepository {
    crear(usuario: Usuario): Promise<Usuario>;
    buscarPorCorreo(correo: string): Promise<Usuario | null>;
    buscarPorId(id: string): Promise<Usuario | null>;
}
