import { Injectable } from '@nestjs/common';
import { Cultivo } from './cultivo.entity';
import { CreateCultivoDto } from './dto/create-cultivo.dto';
import { UpdateCultivoDto } from './dto/update-cultivo.dto';

@Injectable()
export class CultivosService {
  private cultivos: Cultivo[] = [];
  private idCounter = 1;

  findAll(): Cultivo[] {
    return this.cultivos;
  }

  findOne(id: number): Cultivo {
    return this.cultivos.find(cultivo => cultivo.id === id);
  }

  create(createCultivoDto: CreateCultivoDto): Cultivo {
    const cultivo = new Cultivo({
      id: this.idCounter++,
      ...createCultivoDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    this.cultivos.push(cultivo);
    return cultivo;
  }

  update(id: number, updateCultivoDto: UpdateCultivoDto): Cultivo {
    const index = this.cultivos.findIndex(cultivo => cultivo.id === id);
    if (index !== -1) {
      this.cultivos[index] = {
        ...this.cultivos[index],
        ...updateCultivoDto,
        updatedAt: new Date(),
      };
      return this.cultivos[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.cultivos.findIndex(cultivo => cultivo.id === id);
    if (index !== -1) {
      this.cultivos.splice(index, 1);
      return true;
    }
    return false;
  }
}
