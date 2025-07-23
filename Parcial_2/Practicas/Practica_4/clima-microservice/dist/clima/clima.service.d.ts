import { Clima } from './clima.entity';
import { CreateClimaDto } from './dto/create-clima.dto';
import { UpdateClimaDto } from './dto/update-clima.dto';
export declare class ClimaService {
    private registrosClima;
    private idCounter;
    findAll(): Clima[];
    findOne(id: number): Clima;
    create(createClimaDto: CreateClimaDto): Clima;
    update(id: number, updateClimaDto: UpdateClimaDto): Clima;
    remove(id: number): boolean;
}
