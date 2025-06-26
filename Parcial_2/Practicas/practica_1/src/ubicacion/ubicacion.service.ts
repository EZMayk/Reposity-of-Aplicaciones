// src/ubicacion/ubicacion.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ubicacion } from './entities/ubicacion.entity';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';

@Injectable()
export class UbicacionService {
  constructor(
    @InjectRepository(Ubicacion)
    private readonly ubicacionRepo: Repository<Ubicacion>,
  ) {}

  create(dto: CreateUbicacionDto) {
    const ubicacion = this.ubicacionRepo.create(dto);
    return this.ubicacionRepo.save(ubicacion);
  }

  findAll() {
    return this.ubicacionRepo.find();
  }

  findOne(id: number) {
    return this.ubicacionRepo.findOne({ where: { id } });
  }

  update(id: number, dto: UpdateUbicacionDto) {
    return this.ubicacionRepo.update(id, dto);
  }

  remove(id: number) {
    return this.ubicacionRepo.delete(id);
  }
}
