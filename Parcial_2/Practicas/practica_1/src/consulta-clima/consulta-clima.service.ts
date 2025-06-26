// src/consultaclima/consultaclima.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConsultaClima } from './entities/consulta-clima.entity';
import { Repository } from 'typeorm';
import { CreateConsultaClimaDto } from './dto/create-consulta-clima.dto';
import { UpdateConsultaClimaDto } from './dto/update-consulta-clima.dto';
import { Ubicacion } from 'src/ubicacion/entities/ubicacion.entity';
import { Clima } from 'src/clima/entities/clima.entity';

@Injectable()
export class ConsultaClimaService {
  constructor(
    @InjectRepository(ConsultaClima)
    private readonly consultaRepo: Repository<ConsultaClima>,

    @InjectRepository(Ubicacion)
    private readonly ubicacionRepo: Repository<Ubicacion>,

    @InjectRepository(Clima)
    private readonly climaRepo: Repository<Clima>,
  ) {}

  async create(dto: CreateConsultaClimaDto) {
    const ubicacion = await this.ubicacionRepo.findOne({ where: { id: dto.ubicacionId } });
    if (!ubicacion) throw new NotFoundException('Ubicación no encontrada');

    const clima = await this.climaRepo.findOne({ where: { id: dto.climaId } });
    if (!clima) throw new NotFoundException('Clima no encontrado');

    const consulta = this.consultaRepo.create({
      fecha: dto.fecha,
      ubicacion,
      clima,
    });

    return this.consultaRepo.save(consulta);
  }

  findAll() {
    return this.consultaRepo.find();
  }

  findOne(id: number) {
    return this.consultaRepo.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdateConsultaClimaDto) {
    const consulta = await this.consultaRepo.findOne({ where: { id } });
    if (!consulta) throw new NotFoundException('Consulta no encontrada');

    if (dto.ubicacionId) {
      const ubicacion = await this.ubicacionRepo.findOne({ where: { id: dto.ubicacionId } });
      if (!ubicacion) throw new NotFoundException('Ubicación no encontrada');
      consulta.ubicacion = ubicacion;
    }

    if (dto.climaId) {
      const clima = await this.climaRepo.findOne({ where: { id: dto.climaId } });
      if (!clima) throw new NotFoundException('Clima no encontrado');
      consulta.clima = clima;
    }

    if (dto.fecha) {
      consulta.fecha = dto.fecha;
    }

    return this.consultaRepo.save(consulta);
  }

  remove(id: number) {
    return this.consultaRepo.delete(id);
  }
}
