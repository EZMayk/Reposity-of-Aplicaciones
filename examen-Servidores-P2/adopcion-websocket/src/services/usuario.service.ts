import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Usuario } from '../entities/usuario.entity';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { DatabaseService } from '../data/database.service';

@Injectable()
export class UsuarioService {
  private readonly databaseService: DatabaseService;

  constructor() {
    this.databaseService = DatabaseService.getInstance();
  }

  async findAll(): Promise<Usuario[]> {
    return this.databaseService.getUsuarios();
  }

  async findOne(id: string): Promise<Usuario> {
    const usuario = this.databaseService.getUsuarioById(id);
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return usuario;
  }

  async findByEmail(email: string): Promise<Usuario | undefined> {
    return this.databaseService.getUsuarioByEmail(email);
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    // Verificar si el email ya existe
    const existingUser = this.databaseService.getUsuarioByEmail(createUsuarioDto.email);
    if (existingUser) {
      throw new ConflictException('Ya existe un usuario registrado con este email');
    }

    const usuario = new Usuario(
      uuidv4(), // Generar ID único
      createUsuarioDto.nombreCompleto,
      createUsuarioDto.email,
      createUsuarioDto.telefono,
      createUsuarioDto.direccion
    );

    return this.databaseService.addUsuario(usuario);
  }

  async update(id: string, updateData: Partial<Omit<Usuario, 'id'>>): Promise<Usuario> {
    // Verificar que el usuario existe
    const existingUser = this.databaseService.getUsuarioById(id);
    if (!existingUser) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    // Si se está actualizando el email, verificar que no esté en uso
    if (updateData.email && updateData.email !== existingUser.email) {
      const userWithEmail = this.databaseService.getUsuarioByEmail(updateData.email);
      if (userWithEmail) {
        throw new ConflictException('Ya existe un usuario registrado con este email');
      }
    }

    const updatedUser = this.databaseService.updateUsuario(id, updateData);
    if (!updatedUser) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    return updatedUser;
  }

  async remove(id: string): Promise<void> {
    const success = this.databaseService.deleteUsuario(id);
    if (!success) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
  }
}
