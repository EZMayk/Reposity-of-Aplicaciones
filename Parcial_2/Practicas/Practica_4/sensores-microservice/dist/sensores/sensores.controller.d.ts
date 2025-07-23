import { SensoresService } from './sensores.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { Sensor } from './sensor.entity';
export declare class SensoresController {
    private readonly sensoresService;
    constructor(sensoresService: SensoresService);
    findAll(): Sensor[];
    findOne(data: {
        id: number;
    }): Sensor | undefined;
    create(createSensorDto: CreateSensorDto): Sensor;
    update(data: {
        id: number;
    } & UpdateSensorDto): Sensor | null;
    remove(data: {
        id: number;
    }): boolean;
}
