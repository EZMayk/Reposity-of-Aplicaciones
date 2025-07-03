import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UbicacionesService } from './ubicaciones.service';
import { Ubicacione } from './entities/ubicacione.entity';
import { CreateUbicacioneInput } from './dto/create-ubicacione.input';
import { UpdateUbicacioneInput } from './dto/update-ubicacione.input';

@Resolver(() => Ubicacione)
export class UbicacionesResolver {
  constructor(private readonly ubicacionesService: UbicacionesService) {}

  @Mutation(() => Ubicacione)
  createUbicacione(@Args('createUbicacioneInput') createUbicacioneInput: CreateUbicacioneInput) {
    return this.ubicacionesService.create(createUbicacioneInput);
  }

  @Query(() => [Ubicacione], { name: 'ubicaciones' })
  findAll() {
    return this.ubicacionesService.findAll();
  }

  @Query(() => Ubicacione, { name: 'ubicacione' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ubicacionesService.findOne(id);
  }

  @Mutation(() => Ubicacione)
  updateUbicacione(@Args('updateUbicacioneInput') updateUbicacioneInput: UpdateUbicacioneInput) {
    return this.ubicacionesService.update(updateUbicacioneInput.id, updateUbicacioneInput);
  }

  @Mutation(() => Ubicacione)
  removeUbicacione(@Args('id', { type: () => Int }) id: number) {
    return this.ubicacionesService.remove(id);
  }
}
