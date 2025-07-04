import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ConsultaClimaService } from './consulta-clima.service';
import { ConsultaClima } from './entities/consulta-clima.entity';
import { CreateConsultaClimaInput } from './dto/create-consulta-clima.input';
import { UpdateConsultaClimaInput } from './dto/update-consulta-clima.input';

@Resolver(() => ConsultaClima)
export class ConsultaClimaResolver {
  constructor(private readonly consultaClimaService: ConsultaClimaService) {}

  // Mutation: crear consulta
  @Mutation(() => ConsultaClima)
  createConsultaClima(
    @Args('createConsultaClimaInput') createConsultaClimaInput: CreateConsultaClimaInput,
  ): Promise<ConsultaClima> {
    return this.consultaClimaService.create(createConsultaClimaInput);
  }

  // Query: obtener todas las consultas
  @Query(() => [ConsultaClima], { name: 'consultasClima' })
  findAll(): Promise<ConsultaClima[]> {
    return this.consultaClimaService.findAll();
  }

  // Query: obtener consulta por ID
  @Query(() => ConsultaClima, { name: 'consultaClima' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<ConsultaClima> {
    return this.consultaClimaService.findOne(id);
  }

  // Mutation: actualizar consulta
  @Mutation(() => ConsultaClima)
  updateConsultaClima(
    @Args('updateConsultaClimaInput') updateConsultaClimaInput: UpdateConsultaClimaInput,
  ): Promise<ConsultaClima> {
    return this.consultaClimaService.update(updateConsultaClimaInput);
  }

  // Mutation: eliminar consulta
  @Mutation(() => ConsultaClima)
  removeConsultaClima(@Args('id', { type: () => Int }) id: number): Promise<ConsultaClima> {
    return this.consultaClimaService.remove(id);
  }
}
