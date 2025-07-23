import { PlagasService } from './plagas.service';
import { CreatePlagaDto } from './dto/create-plaga.dto';
import { UpdatePlagaDto } from './dto/update-plaga.dto';
export declare class PlagasController {
    private readonly plagasService;
    constructor(plagasService: PlagasService);
    findAll(): import("./plaga.entity").Plaga[];
    findOne(data: {
        id: number;
    }): import("./plaga.entity").Plaga;
    create(createPlagaDto: CreatePlagaDto): import("./plaga.entity").Plaga;
    update(data: {
        id: number;
    } & UpdatePlagaDto): import("./plaga.entity").Plaga;
    remove(data: {
        id: number;
    }): boolean;
}
