import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UbicacionService } from './ubicacion.service';
import { Ubicacion } from './entities/ubicacion.entity';
import { CreateUbicacionInput } from './dto/create-ubicacion.input';
import { UpdateUbicacionInput } from './dto/update-ubicacion.input';

@Resolver(() => Ubicacion)
export class UbicacionResolver {
  constructor(private readonly ubicacionService: UbicacionService) {}

  // Mutation: crear una nueva ubicación
  @Mutation(() => Ubicacion)
  createUbicacion(
    @Args('createUbicacionInput') createUbicacionInput: CreateUbicacionInput,
  ): Promise<Ubicacion> {
    return this.ubicacionService.create(createUbicacionInput);
  }

  // Query: obtener todas las ubicaciones
  @Query(() => [Ubicacion], { name: 'ubicaciones' })
  findAll(): Promise<Ubicacion[]> {
    return this.ubicacionService.findAll();
  }

  // Query: obtener una ubicación por ID
  @Query(() => Ubicacion, { name: 'ubicacion' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Ubicacion> {
    return this.ubicacionService.findOne(id);
  }

  // Mutation: actualizar una ubicación
  @Mutation(() => Ubicacion)
  updateUbicacion(
    @Args('updateUbicacionInput') updateUbicacionInput: UpdateUbicacionInput,
):  Promise<Ubicacion> {
  return this.ubicacionService.update(updateUbicacionInput);
}

  // Mutation: eliminar una ubicación
  @Mutation(() => Ubicacion)
  removeUbicacion(@Args('id', { type: () => Int }) id: number): Promise<Ubicacion> {
    return this.ubicacionService.remove(id);
  }
}
