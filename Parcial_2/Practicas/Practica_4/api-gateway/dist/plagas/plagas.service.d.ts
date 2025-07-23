import { ClientProxy } from '@nestjs/microservices';
export declare class PlagasService {
    private client;
    constructor(client: ClientProxy);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: number): import("rxjs").Observable<any>;
    create(createPlagaDto: any): import("rxjs").Observable<any>;
    update(id: number, updatePlagaDto: any): import("rxjs").Observable<any>;
    remove(id: number): import("rxjs").Observable<any>;
}
