import { ClientProxy } from '@nestjs/microservices';
export declare class ExportacionService {
    private client;
    constructor(client: ClientProxy);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: number): import("rxjs").Observable<any>;
    create(createExportacionDto: any): import("rxjs").Observable<any>;
    update(id: number, updateExportacionDto: any): import("rxjs").Observable<any>;
    remove(id: number): import("rxjs").Observable<any>;
}
