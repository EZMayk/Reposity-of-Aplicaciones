import { PartialType } from '@nestjs/mapped-types';
import { CreateConsultaClimaDto } from './create-consulta-clima.dto';

export class UpdateConsultaClimaDto extends PartialType(CreateConsultaClimaDto) {
  id: number;
}
