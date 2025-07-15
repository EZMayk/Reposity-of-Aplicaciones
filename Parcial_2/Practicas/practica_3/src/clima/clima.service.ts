import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clima } from './entities/clima.entity';
import { CreateClimaDto } from './dto/create-clima.dto';
import { UpdateClimaDto } from './dto/update-clima.dto';

@Injectable()
export class ClimaService {
  constructor(
    @InjectRepository(Clima)
    private readonly repo: Repository<Clima>,
  ) {}

  async create(data: CreateClimaDto) {
    const clima = this.repo.create(data);
    return await this.repo.save(clima);
  }

  async findAll() {
    return await this.repo.find();
  }

  async update(id: number, data: UpdateClimaDto) {
    await this.repo.update(id, data);
    return await this.repo.findOneBy({ id });
  }

  async remove(id: number) {
    await this.repo.delete(id);
    return { deleted: true };
  }
}
