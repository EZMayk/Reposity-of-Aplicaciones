import { Cultivo } from './cultivo.entity';
import { CreateCultivoDto } from './dto/create-cultivo.dto';
import { UpdateCultivoDto } from './dto/update-cultivo.dto';
export declare class CultivosService {
    private cultivos;
    private idCounter;
    findAll(): Cultivo[];
    findOne(id: number): Cultivo;
    create(createCultivoDto: CreateCultivoDto): Cultivo;
    update(id: number, updateCultivoDto: UpdateCultivoDto): Cultivo;
    remove(id: number): boolean;
}
