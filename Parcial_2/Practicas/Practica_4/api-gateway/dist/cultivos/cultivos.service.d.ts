import { ClientProxy } from '@nestjs/microservices';
export declare class CultivosService {
    private client;
    constructor(client: ClientProxy);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: number): import("rxjs").Observable<any>;
    create(createCultivoDto: any): import("rxjs").Observable<any>;
    update(id: number, updateCultivoDto: any): import("rxjs").Observable<any>;
    remove(id: number): import("rxjs").Observable<any>;
}
