import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Mascota } from '../types/mascota.type';
import { CreateMascotaInput } from '../inputs/create-mascota.input';
import { DatabaseService } from '../data/database.service';

@Resolver(() => Mascota)
export class MascotaResolver {
  private readonly databaseService: DatabaseService;

  constructor() {
    this.databaseService = DatabaseService.getInstance();
  }

  @Query(() => [Mascota], { name: 'mascotas' })
  async findAll(): Promise<Mascota[]> {
    return this.databaseService.getMascotas();
  }

  @Query(() => [Mascota], { name: 'mascotasDisponibles' })
  async findDisponibles(): Promise<Mascota[]> {
    return this.databaseService.getMascotasDisponibles();
  }

  @Query(() => Mascota, { name: 'mascota' })
  async findOne(@Args('id') id: string): Promise<Mascota> {
    const mascota = this.databaseService.getMascotaById(id);
    if (!mascota) {
      throw new NotFoundException(`Mascota con ID ${id} no encontrada`);
    }
    return mascota;
  }

  @Mutation(() => Mascota)
  async crearMascota(@Args('input') input: CreateMascotaInput): Promise<Mascota> {
    const mascota = new Mascota(
      uuidv4(),
      input.nombre,
      input.especie,
      input.raza,
      input.edad,
      input.disponible ?? true,
    );

    return this.databaseService.addMascota(mascota);
  }
}
