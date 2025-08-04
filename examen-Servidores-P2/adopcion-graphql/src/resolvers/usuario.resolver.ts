import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Usuario } from '../types/usuario.type';
import { CreateUsuarioInput } from '../inputs/create-usuario.input';
import { DatabaseService } from '../data/database.service';

@Resolver(() => Usuario)
export class UsuarioResolver {
  private readonly databaseService: DatabaseService;

  constructor() {
    this.databaseService = DatabaseService.getInstance();
  }

  @Query(() => [Usuario], { name: 'usuarios' })
  async findAll(): Promise<Usuario[]> {
    return this.databaseService.getUsuarios();
  }

  @Query(() => Usuario, { name: 'usuario' })
  async findOne(@Args('id') id: string): Promise<Usuario> {
    const usuario = this.databaseService.getUsuarioById(id);
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return usuario;
  }

  @Mutation(() => Usuario)
  async crearUsuario(@Args('input') input: CreateUsuarioInput): Promise<Usuario> {
    // Verificar si el email ya existe
    const existingUser = this.databaseService.getUsuarioByEmail(input.email);
    if (existingUser) {
      throw new ConflictException('Ya existe un usuario registrado con este email');
    }

    const usuario = new Usuario(
      uuidv4(),
      input.nombreCompleto,
      input.email,
      input.telefono,
      input.direccion,
    );

    return this.databaseService.addUsuario(usuario);
  }
}
