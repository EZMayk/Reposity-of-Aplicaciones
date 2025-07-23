import { ExportacionService } from './exportacion.service';
import { CreateExportacionDto } from './dto/create-exportacion.dto';
import { UpdateExportacionDto } from './dto/update-exportacion.dto';
export declare class ExportacionController {
    private readonly exportacionService;
    constructor(exportacionService: ExportacionService);
    findAll(): import("./exportacion.entity").Exportacion[];
    findOne(data: {
        id: number;
    }): import("./exportacion.entity").Exportacion;
    create(createExportacionDto: CreateExportacionDto): import("./exportacion.entity").Exportacion;
    update(data: {
        id: number;
    } & UpdateExportacionDto): import("./exportacion.entity").Exportacion;
    remove(data: {
        id: number;
    }): boolean;
}
