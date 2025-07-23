import { Plaga } from './plaga.entity';
import { CreatePlagaDto } from './dto/create-plaga.dto';
import { UpdatePlagaDto } from './dto/update-plaga.dto';
export declare class PlagasService {
    private plagas;
    private idCounter;
    findAll(): Plaga[];
    findOne(id: number): Plaga;
    create(createPlagaDto: CreatePlagaDto): Plaga;
    update(id: number, updatePlagaDto: UpdatePlagaDto): Plaga;
    remove(id: number): boolean;
}
