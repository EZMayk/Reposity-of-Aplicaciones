import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ClimaService } from './clima.service';
import { Clima } from './entities/clima.entity';
import { CreateClimaInput } from './dto/create-clima.input';
import { UpdateClimaInput } from './dto/update-clima.input';

@Resolver(() => Clima)
export class ClimaResolver {
  constructor(private readonly climaService: ClimaService) {}

  // Mutation: crear nuevo clima
  @Mutation(() => Clima)
  createClima(
    @Args('createClimaInput') createClimaInput: CreateClimaInput,
  ): Promise<Clima> {
    return this.climaService.create(createClimaInput);
  }

  // Query: obtener todos los climas
  @Query(() => [Clima], { name: 'climas' })
  findAll(): Promise<Clima[]> {
    return this.climaService.findAll();
  }

  // Query: obtener clima por ID
  @Query(() => Clima, { name: 'clima' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Clima> {
    return this.climaService.findOne(id);
  }

  // Mutation: actualizar clima
  @Mutation(() => Clima)
  updateClima(
    @Args('updateClimaInput') updateClimaInput: UpdateClimaInput,
  ): Promise<Clima> {
    return this.climaService.update(updateClimaInput);
  }

  // Mutation: eliminar clima
  @Mutation(() => Clima)
  removeClima(@Args('id', { type: () => Int }) id: number): Promise<Clima> {
    return this.climaService.remove(id);
  }
}
