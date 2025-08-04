import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Mascota } from '../entities/mascota.entity';
import { CreateMascotaDto } from '../dto/create-mascota.dto';
import { DatabaseService } from '../data/database.service';

@Injectable()
export class MascotaService {
  private readonly databaseService: DatabaseService;

  constructor() {
    this.databaseService = DatabaseService.getInstance();
  }

  async create(createMascotaDto: CreateMascotaDto): Promise<Mascota> {
    const mascota = new Mascota(
      uuidv4(),
      createMascotaDto.nombre,
      createMascotaDto.especie,
      createMascotaDto.raza,
      createMascotaDto.edad,
      createMascotaDto.disponible ?? true,
    );

    return this.databaseService.addMascota(mascota);
  }

  async findAll(): Promise<Mascota[]> {
    return this.databaseService.getMascotas();
  }

  async findOne(id: string): Promise<Mascota> {
    const mascota = this.databaseService.getMascotaById(id);
    if (!mascota) {
      throw new NotFoundException(`Mascota con ID ${id} no encontrada`);
    }
    return mascota;
  }

  async findDisponibles(): Promise<Mascota[]> {
    return this.databaseService.getMascotasDisponibles();
  }

  async updateDisponibilidad(id: string, disponible: boolean): Promise<Mascota> {
    const mascota = this.databaseService.updateMascotaDisponibilidad(id, disponible);
    if (!mascota) {
      throw new NotFoundException(`Mascota con ID ${id} no encontrada`);
    }
    return mascota;
  }
}
