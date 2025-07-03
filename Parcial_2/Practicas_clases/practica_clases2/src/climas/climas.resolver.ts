import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ClimasService } from './climas.service';
import { Clima } from './entities/clima.entity';
import { CreateClimaInput } from './dto/create-clima.input';
import { UpdateClimaInput } from './dto/update-clima.input';

@Resolver(() => Clima)
export class ClimasResolver {
  constructor(private readonly climasService: ClimasService) {}

  @Mutation(() => Clima)
  createClima(@Args('createClimaInput') createClimaInput: CreateClimaInput) {
    return this.climasService.create(createClimaInput);
  }

  @Query(() => [Clima], { name: 'climas' })
  findAll() {
    return this.climasService.findAll();
  }

  @Query(() => Clima, { name: 'clima' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.climasService.findOne(id);
  }

  @Mutation(() => Clima)
  updateClima(@Args('updateClimaInput') updateClimaInput: UpdateClimaInput) {
    return this.climasService.update(updateClimaInput.id, updateClimaInput);
  }

  @Mutation(() => Clima)
  removeClima(@Args('id', { type: () => Int }) id: number) {
    return this.climasService.remove(id);
  }
}
