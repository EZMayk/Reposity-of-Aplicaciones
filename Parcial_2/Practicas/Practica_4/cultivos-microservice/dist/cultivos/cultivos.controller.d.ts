import { CultivosService } from './cultivos.service';
import { CreateCultivoDto } from './dto/create-cultivo.dto';
import { UpdateCultivoDto } from './dto/update-cultivo.dto';
export declare class CultivosController {
    private readonly cultivosService;
    constructor(cultivosService: CultivosService);
    findAll(): import("./cultivo.entity").Cultivo[];
    findOne(data: {
        id: number;
    }): import("./cultivo.entity").Cultivo;
    create(createCultivoDto: CreateCultivoDto): import("./cultivo.entity").Cultivo;
    update(data: {
        id: number;
    } & UpdateCultivoDto): import("./cultivo.entity").Cultivo;
    remove(data: {
        id: number;
    }): boolean;
}
