import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ubicacion } from './entities/ubicacion.entity';
import { CreateUbicacionInput } from './dto/create-ubicacion.input';
import { UpdateUbicacionInput } from './dto/update-ubicacion.input';

@Injectable()
export class UbicacionService {
  constructor(
    @InjectRepository(Ubicacion)
    private readonly ubicacionRepository: Repository<Ubicacion>,
  ) {}

  // Crear nueva ubicación
  async create(createUbicacionInput: CreateUbicacionInput): Promise<Ubicacion> {
    const ubicacion = this.ubicacionRepository.create(createUbicacionInput);
    return this.ubicacionRepository.save(ubicacion);
  }

  // Obtener todas las ubicaciones
  findAll(): Promise<Ubicacion[]> {
    return this.ubicacionRepository.find();
  }

  // Obtener una ubicación por ID
  async findOne(id: number): Promise<Ubicacion> {
    const ubicacion = await this.ubicacionRepository.findOneBy({ id });
    if (!ubicacion) {
      throw new NotFoundException(`Ubicación con ID ${id} no encontrada`);
    }
    return ubicacion;
  }

  // Actualizar una ubicación existente
  async update(updateUbicacionInput: UpdateUbicacionInput): Promise<Ubicacion> {
    const ubicacion = await this.ubicacionRepository.preload(updateUbicacionInput);
    if (!ubicacion) {
      throw new NotFoundException(`Ubicación con ID ${updateUbicacionInput.id} no encontrada`);
  }
  return this.ubicacionRepository.save(ubicacion);
}

// Eliminar una ubicación
async remove(id: number): Promise<Ubicacion> {
  const ubicacion = await this.findOne(id); // obtiene los datos
  const copia = { ...ubicacion }; // copia para retornar
  await this.ubicacionRepository.remove(ubicacion); // luego elimina
  return copia; // retornamos la copia
}
}
