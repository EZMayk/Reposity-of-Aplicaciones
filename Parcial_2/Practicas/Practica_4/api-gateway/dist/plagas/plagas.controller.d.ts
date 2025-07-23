import { PlagasService } from './plagas.service';
export declare class PlagasController {
    private readonly plagasService;
    constructor(plagasService: PlagasService);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    create(createPlagaDto: any): import("rxjs").Observable<any>;
    update(id: string, updatePlagaDto: any): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
