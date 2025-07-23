import { ClientProxy } from '@nestjs/microservices';
export declare class SensoresService {
    private client;
    constructor(client: ClientProxy);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: number): import("rxjs").Observable<any>;
    create(createSensorDto: any): import("rxjs").Observable<any>;
    update(id: number, updateSensorDto: any): import("rxjs").Observable<any>;
    remove(id: number): import("rxjs").Observable<any>;
}
