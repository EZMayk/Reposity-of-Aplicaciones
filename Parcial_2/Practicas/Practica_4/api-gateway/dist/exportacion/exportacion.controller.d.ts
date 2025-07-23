import { ExportacionService } from './exportacion.service';
export declare class ExportacionController {
    private readonly exportacionService;
    constructor(exportacionService: ExportacionService);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    create(createExportacionDto: any): import("rxjs").Observable<any>;
    update(id: string, updateExportacionDto: any): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
