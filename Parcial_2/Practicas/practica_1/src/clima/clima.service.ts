// src/clima/clima.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Clima } from './entities/clima.entity';
import { Repository } from 'typeorm';
import { CreateClimaDto } from './dto/create-clima.dto';
import { UpdateClimaDto } from './dto/update-clima.dto';

@Injectable()
export class ClimaService {
  constructor(
    @InjectRepository(Clima)
    private readonly climaRepo: Repository<Clima>,
  ) {}

  create(dto: CreateClimaDto) {
    const clima = this.climaRepo.create(dto);
    return this.climaRepo.save(clima);
  }

  findAll() {
    return this.climaRepo.find();
  }

  findOne(id: number) {
    return this.climaRepo.findOne({ where: { id } });
  }

  update(id: number, dto: UpdateClimaDto) {
    return this.climaRepo.update(id, dto);
  }

  remove(id: number) {
    return this.climaRepo.delete(id);
  }
}
