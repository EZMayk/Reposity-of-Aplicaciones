import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clima } from './entities/clima.entity';
import { CreateClimaInput } from './dto/create-clima.input';
import { UpdateClimaInput } from './dto/update-clima.input';

@Injectable()
export class ClimaService {
  constructor(
    @InjectRepository(Clima)
    private readonly climaRepository: Repository<Clima>,
  ) {}

  // Crear nuevo clima
  async create(createClimaInput: CreateClimaInput): Promise<Clima> {
    const clima = this.climaRepository.create(createClimaInput);
    return this.climaRepository.save(clima);
  }

  // Obtener todos los climas
  findAll(): Promise<Clima[]> {
    return this.climaRepository.find();
  }

  // Obtener clima por ID
  async findOne(id: number): Promise<Clima> {
    const clima = await this.climaRepository.findOneBy({ id });
    if (!clima) {
      throw new NotFoundException(`Clima con ID ${id} no encontrado`);
    }
    return clima;
  }

  // Actualizar clima
  async update(updateClimaInput: UpdateClimaInput): Promise<Clima> {
    const clima = await this.climaRepository.preload(updateClimaInput);
    if (!clima) {
      throw new NotFoundException(`Clima con ID ${updateClimaInput.id} no encontrado`);
    }
    return this.climaRepository.save(clima);
  }

  // Eliminar clima
  async remove(id: number): Promise<Clima> {
    const clima = await this.findOne(id);
    const copia = { ...clima };
    await this.climaRepository.remove(clima);
    return copia;
}
}
