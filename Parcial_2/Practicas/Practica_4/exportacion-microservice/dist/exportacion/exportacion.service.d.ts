import { Exportacion } from './exportacion.entity';
import { CreateExportacionDto } from './dto/create-exportacion.dto';
import { UpdateExportacionDto } from './dto/update-exportacion.dto';
export declare class ExportacionService {
    private exportaciones;
    private idCounter;
    findAll(): Exportacion[];
    findOne(id: number): Exportacion;
    create(createExportacionDto: CreateExportacionDto): Exportacion;
    update(id: number, updateExportacionDto: UpdateExportacionDto): Exportacion;
    remove(id: number): boolean;
}
