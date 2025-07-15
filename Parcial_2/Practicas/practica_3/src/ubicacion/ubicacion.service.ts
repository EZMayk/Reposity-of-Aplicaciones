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
    private readonly repo: Repository<Ubicacion>,
  ) {}

  async create(data: CreateUbicacionDto) {
  const ubicacion = this.repo.create(data);
  const saved = await this.repo.save(ubicacion);
  console.log('✅ Guardado por TypeORM:', saved); 
  return saved;
}


  async findAll() {
    return this.repo.find();
  }

  async update(id: number, data: UpdateUbicacionDto) {
    await this.repo.update(id, data);
    return this.repo.findOneBy({ id });
  }

  async remove(id: number) {
    await this.repo.delete(id);
    return { deleted: true };
  }
}
