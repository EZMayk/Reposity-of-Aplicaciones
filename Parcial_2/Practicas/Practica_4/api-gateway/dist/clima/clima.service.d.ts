import { ClientProxy } from '@nestjs/microservices';
export declare class ClimaService {
    private client;
    constructor(client: ClientProxy);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: number): import("rxjs").Observable<any>;
    create(createClimaDto: any): import("rxjs").Observable<any>;
    update(id: number, updateClimaDto: any): import("rxjs").Observable<any>;
    remove(id: number): import("rxjs").Observable<any>;
}
