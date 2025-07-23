import { Sensor } from './sensor.entity';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
export declare class SensoresService {
    private sensores;
    private idCounter;
    findAll(): Sensor[];
    findOne(id: number): Sensor | undefined;
    create(createSensorDto: CreateSensorDto): Sensor;
    update(id: number, updateSensorDto: UpdateSensorDto): Sensor | null;
    remove(id: number): boolean;
}
