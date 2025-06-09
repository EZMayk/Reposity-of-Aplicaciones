import { UsuarioRepository } from '../../domain/repositories/UsuarioRepository';
import { Usuario } from '../../domain/entities/UsuarioEntity';
import { AppDataSource } from '../../config/data-source';

export class UsuarioRepositoryImpl implements UsuarioRepository {
    private repository = AppDataSource.getRepository(Usuario);

    async crear(usuario: Usuario): Promise<Usuario> {
        return this.repository.save(usuario);
    }

    async buscarPorCorreo(correo: string): Promise<Usuario | null> {
        return this.repository.findOneBy({ correo });
    }

    async buscarPorId(id: string): Promise<Usuario | null> {
        return this.repository.findOneBy({ id });
    }
}
