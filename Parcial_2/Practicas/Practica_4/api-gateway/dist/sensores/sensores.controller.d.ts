import { SensoresService } from './sensores.service';
export declare class SensoresController {
    private readonly sensoresService;
    constructor(sensoresService: SensoresService);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    create(createSensorDto: any): import("rxjs").Observable<any>;
    update(id: string, updateSensorDto: any): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
