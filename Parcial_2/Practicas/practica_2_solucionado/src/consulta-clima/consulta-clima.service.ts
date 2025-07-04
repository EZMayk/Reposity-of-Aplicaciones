import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConsultaClima } from './entities/consulta-clima.entity';
import { CreateConsultaClimaInput } from './dto/create-consulta-clima.input';
import { UpdateConsultaClimaInput } from './dto/update-consulta-clima.input';
import { Ubicacion } from '../ubicacion/entities/ubicacion.entity';
import { Clima } from '../clima/entities/clima.entity';

@Injectable()
export class ConsultaClimaService {
  constructor(
    @InjectRepository(ConsultaClima)
    private readonly consultaClimaRepo: Repository<ConsultaClima>,

    @InjectRepository(Ubicacion)
    private readonly ubicacionRepo: Repository<Ubicacion>,

    @InjectRepository(Clima)
    private readonly climaRepo: Repository<Clima>,
  ) {}

  // Crear una nueva consulta
  async create(input: CreateConsultaClimaInput): Promise<ConsultaClima> {
    const ubicacion = await this.ubicacionRepo.findOneBy({ id: input.ubicacionId });
    if (!ubicacion) {
      throw new NotFoundException(`Ubicación con ID ${input.ubicacionId} no encontrada`);
    }

    const clima = await this.climaRepo.findOneBy({ id: input.climaId });
    if (!clima) {
      throw new NotFoundException(`Clima con ID ${input.climaId} no encontrado`);
    }

    const nuevaConsulta = this.consultaClimaRepo.create({
      fechaConsulta: new Date(input.fechaConsulta),
      ubicacion,
      clima,
    });

    return this.consultaClimaRepo.save(nuevaConsulta);
  }

  // Obtener todas las consultas
  findAll(): Promise<ConsultaClima[]> {
    return this.consultaClimaRepo.find();
  }

  // Obtener consulta por ID
  async findOne(id: number): Promise<ConsultaClima> {
    const consulta = await this.consultaClimaRepo.findOneBy({ id });
    if (!consulta) {
      throw new NotFoundException(`Consulta con ID ${id} no encontrada`);
    }
    return consulta;
  }

  // Actualizar consulta
  async update(input: UpdateConsultaClimaInput): Promise<ConsultaClima> {
    const consulta = await this.consultaClimaRepo.findOneBy({ id: input.id });
    if (!consulta) {
      throw new NotFoundException(`Consulta con ID ${input.id} no encontrada`);
    }

    if (input.ubicacionId) {
      const ubicacion = await this.ubicacionRepo.findOneBy({ id: input.ubicacionId });
      if (!ubicacion) {
        throw new NotFoundException(`Ubicación con ID ${input.ubicacionId} no encontrada`);
      }
      consulta.ubicacion = ubicacion;
    }

    if (input.climaId) {
      const clima = await this.climaRepo.findOneBy({ id: input.climaId });
      if (!clima) {
        throw new NotFoundException(`Clima con ID ${input.climaId} no encontrado`);
      }
      consulta.clima = clima;
    }

    if (input.fechaConsulta) {
      consulta.fechaConsulta = new Date(input.fechaConsulta);
    }

    return this.consultaClimaRepo.save(consulta);
  }

  // Eliminar consulta
  async remove(id: number): Promise<ConsultaClima> {
    const consulta = await this.findOne(id);
    const copia = { ...consulta };
    await this.consultaClimaRepo.remove(consulta);
    return copia;
}

}
