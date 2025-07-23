import { ClimaService } from './clima.service';
import { CreateClimaDto } from './dto/create-clima.dto';
import { UpdateClimaDto } from './dto/update-clima.dto';
export declare class ClimaController {
    private readonly climaService;
    constructor(climaService: ClimaService);
    findAll(): import("./clima.entity").Clima[];
    findOne(data: {
        id: number;
    }): import("./clima.entity").Clima;
    create(createClimaDto: CreateClimaDto): import("./clima.entity").Clima;
    update(data: {
        id: number;
    } & UpdateClimaDto): import("./clima.entity").Clima;
    remove(data: {
        id: number;
    }): boolean;
}
