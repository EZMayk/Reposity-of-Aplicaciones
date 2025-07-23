import { ClimaService } from './clima.service';
export declare class ClimaController {
    private readonly climaService;
    constructor(climaService: ClimaService);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    create(createClimaDto: any): import("rxjs").Observable<any>;
    update(id: string, updateClimaDto: any): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
