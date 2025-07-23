import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SensoresService } from './sensores.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { Sensor } from './sensor.entity';

@Controller()
export class SensoresController {
  constructor(private readonly sensoresService: SensoresService) {}

  @MessagePattern({ cmd: 'find_all_sensores' })
  findAll(): Sensor[] {
    return this.sensoresService.findAll();
  }

  @MessagePattern({ cmd: 'find_one_sensor' })
  findOne(@Payload() data: { id: number }): Sensor | undefined {
    return this.sensoresService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'create_sensor' })
  create(@Payload() createSensorDto: CreateSensorDto): Sensor {
    return this.sensoresService.create(createSensorDto);
  }

  @MessagePattern({ cmd: 'update_sensor' })
  update(@Payload() data: { id: number } & UpdateSensorDto): Sensor | null {
    const { id, ...updateSensorDto } = data;
    return this.sensoresService.update(id, updateSensorDto);
  }

  @MessagePattern({ cmd: 'remove_sensor' })
  remove(@Payload() data: { id: number }): boolean {
    return this.sensoresService.remove(data.id);
  }
}
