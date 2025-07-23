import { Injectable } from '@nestjs/common';
import { Ciudadano } from './entities/ciudadano.entity';
import { CreateCiudadanoDto } from './dto/create-ciudadano.dto';
import { UpdateCiudadanoDto } from './dto/update-ciudadano.dto';

@Injectable()
export class CiudadanosService {
  private ciudadanos: Ciudadano[] = [];
  private idCounter = 1;

  create(createCiudadanoDto: CreateCiudadanoDto) {
    const ciudadano = {
      id: this.idCounter++,
      ...createCiudadanoDto,
      activo: true,
    };
    this.ciudadanos.push(ciudadano);
    return ciudadano;
  }

  findAll() {
    return this.ciudadanos;
  }

  findOne(id: number) {
    return this.ciudadanos.find(c => c.id === id);
  }

  update(id: number, updateCiudadanoDto: UpdateCiudadanoDto) {
    const index = this.ciudadanos.findIndex(c => c.id === id);
    if (index >= 0) {
      this.ciudadanos[index] = { ...this.ciudadanos[index], ...updateCiudadanoDto };
      return this.ciudadanos[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.ciudadanos.findIndex(c => c.id === id);
    if (index >= 0) {
      const ciudadano = this.ciudadanos[index];
      this.ciudadanos.splice(index, 1);
      return ciudadano;
    }
    return null;
  }
}
