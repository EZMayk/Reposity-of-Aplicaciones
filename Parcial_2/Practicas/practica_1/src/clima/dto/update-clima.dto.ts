// src/clima/dto/update-clima.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateClimaDto } from './create-clima.dto';

export class UpdateClimaDto extends PartialType(CreateClimaDto) {}
