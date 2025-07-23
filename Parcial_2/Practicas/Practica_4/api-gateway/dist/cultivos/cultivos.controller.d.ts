import { CultivosService } from './cultivos.service';
export declare class CultivosController {
    private readonly cultivosService;
    constructor(cultivosService: CultivosService);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    create(createCultivoDto: any): import("rxjs").Observable<any>;
    update(id: string, updateCultivoDto: any): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
