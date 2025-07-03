import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ConsultaClimasService } from './consulta-climas.service';
import { ConsultaClima } from './entities/consulta-clima.entity';
import { CreateConsultaClimaInput } from './dto/create-consulta-clima.input';
import { UpdateConsultaClimaInput } from './dto/update-consulta-clima.input';

@Resolver(() => ConsultaClima)
export class ConsultaClimasResolver {
  constructor(private readonly consultaClimasService: ConsultaClimasService) {}

  @Mutation(() => ConsultaClima)
  createConsultaClima(@Args('createConsultaClimaInput') createConsultaClimaInput: CreateConsultaClimaInput) {
    return this.consultaClimasService.create(createConsultaClimaInput);
  }

  @Query(() => [ConsultaClima], { name: 'consultaClimas' })
  findAll() {
    return this.consultaClimasService.findAll();
  }

  @Query(() => ConsultaClima, { name: 'consultaClima' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.consultaClimasService.findOne(id);
  }

  @Mutation(() => ConsultaClima)
  updateConsultaClima(@Args('updateConsultaClimaInput') updateConsultaClimaInput: UpdateConsultaClimaInput) {
    return this.consultaClimasService.update(updateConsultaClimaInput.id, updateConsultaClimaInput);
  }

  @Mutation(() => ConsultaClima)
  removeConsultaClima(@Args('id', { type: () => Int }) id: number) {
    return this.consultaClimasService.remove(id);
  }
}
