import { Injectable } from '@nestjs/common';
import { Plaga } from './plaga.entity';
import { CreatePlagaDto } from './dto/create-plaga.dto';
import { UpdatePlagaDto } from './dto/update-plaga.dto';

@Injectable()
export class PlagasService {
  private plagas: Plaga[] = [];
  private idCounter = 1;

  findAll(): Plaga[] {
    return this.plagas;
  }

  findOne(id: number): Plaga {
    return this.plagas.find(plaga => plaga.id === id);
  }

  create(createPlagaDto: CreatePlagaDto): Plaga {
    const plaga = new Plaga({
      id: this.idCounter++,
      ...createPlagaDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    this.plagas.push(plaga);
    return plaga;
  }

  update(id: number, updatePlagaDto: UpdatePlagaDto): Plaga {
    const index = this.plagas.findIndex(plaga => plaga.id === id);
    if (index !== -1) {
      this.plagas[index] = {
        ...this.plagas[index],
        ...updatePlagaDto,
        updatedAt: new Date(),
      };
      return this.plagas[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.plagas.findIndex(plaga => plaga.id === id);
    if (index !== -1) {
      this.plagas.splice(index, 1);
      return true;
    }
    return false;
  }
}
