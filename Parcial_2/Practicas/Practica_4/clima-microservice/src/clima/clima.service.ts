import { Injectable } from '@nestjs/common';
import { Clima } from './clima.entity';
import { CreateClimaDto } from './dto/create-clima.dto';
import { UpdateClimaDto } from './dto/update-clima.dto';

@Injectable()
export class ClimaService {
  private registrosClima: Clima[] = [];
  private idCounter = 1;

  findAll(): Clima[] {
    return this.registrosClima;
  }

  findOne(id: number): Clima {
    return this.registrosClima.find(clima => clima.id === id);
  }

  create(createClimaDto: CreateClimaDto): Clima {
    const clima = new Clima({
      id: this.idCounter++,
      ...createClimaDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    this.registrosClima.push(clima);
    return clima;
  }

  update(id: number, updateClimaDto: UpdateClimaDto): Clima {
    const index = this.registrosClima.findIndex(clima => clima.id === id);
    if (index !== -1) {
      this.registrosClima[index] = {
        ...this.registrosClima[index],
        ...updateClimaDto,
        updatedAt: new Date(),
      };
      return this.registrosClima[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.registrosClima.findIndex(clima => clima.id === id);
    if (index !== -1) {
      this.registrosClima.splice(index, 1);
      return true;
    }
    return false;
  }
}
