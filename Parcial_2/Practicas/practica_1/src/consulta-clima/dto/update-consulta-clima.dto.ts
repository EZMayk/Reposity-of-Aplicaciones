// src/consultaclima/dto/update-consultaclima.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateConsultaClimaDto } from '../dto/create-consulta-clima.dto';

export class UpdateConsultaClimaDto extends PartialType(CreateConsultaClimaDto) {}
