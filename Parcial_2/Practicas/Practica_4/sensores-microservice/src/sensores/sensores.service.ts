import { Injectable } from '@nestjs/common';
import { Sensor } from './sensor.entity';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';

@Injectable()
export class SensoresService {
  private sensores: Sensor[] = [];
  private idCounter = 1;

  findAll(): Sensor[] {
    return this.sensores;
  }

  findOne(id: number): Sensor | undefined {
    return this.sensores.find(sensor => sensor.id === id);
  }

  create(createSensorDto: CreateSensorDto): Sensor {
    const sensor = new Sensor({
      id: this.idCounter++,
      ...createSensorDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    this.sensores.push(sensor);
    return sensor;
  }

  update(id: number, updateSensorDto: UpdateSensorDto): Sensor | null {
    const index = this.sensores.findIndex(sensor => sensor.id === id);
    if (index !== -1) {
      this.sensores[index] = {
        ...this.sensores[index],
        ...updateSensorDto,
        updatedAt: new Date(),
      };
      return this.sensores[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.sensores.findIndex(sensor => sensor.id === id);
    if (index !== -1) {
      this.sensores.splice(index, 1);
      return true;
    }
    return false;
  }
}
