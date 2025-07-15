import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConsultaClima } from './entities/consulta-clima.entity';
import { CreateConsultaClimaDto } from './dto/create-consulta-clima.dto';
import { UpdateConsultaClimaDto } from './dto/update-consulta-clima.dto';
import { Ubicacion } from 'src/ubicacion/entities/ubicacion.entity';
import { Clima } from 'src/clima/entities/clima.entity';

@Injectable()
export class ConsultaClimaService {
  constructor(
    @InjectRepository(ConsultaClima)
    private readonly repo: Repository<ConsultaClima>,
    @InjectRepository(Ubicacion)
    private readonly ubicacionRepo: Repository<Ubicacion>,
    @InjectRepository(Clima)
    private readonly climaRepo: Repository<Clima>,
  ) {}

  async create(data: CreateConsultaClimaDto) {
    const ubicacion = await this.ubicacionRepo.findOneBy({ id: data.ubicacionId });
    const clima = await this.climaRepo.findOneBy({ id: data.climaId });

    const consulta = this.repo.create({
      ...(data.fecha && { fecha: new Date(data.fecha) }),
      ...(ubicacion && { ubicacion }),
      ...(clima && { clima }),
    });

    return await this.repo.save(consulta);
  }

  async findAll() {
    return await this.repo.find();
  }

  async update(id: number, data: UpdateConsultaClimaDto) {
    const ubicacion = await this.ubicacionRepo.findOneBy({ id: data.ubicacionId });
    const clima = await this.climaRepo.findOneBy({ id: data.climaId });

    await this.repo.update(id, {
      ...(data.fecha !== undefined && { fecha: new Date(data.fecha) }),
      ...(ubicacion && { ubicacion }),
      ...(clima && { clima }),
    });

    return await this.repo.findOneBy({ id });
  }

  async remove(id: number) {
    await this.repo.delete(id);
    return { deleted: true };
  }
}
