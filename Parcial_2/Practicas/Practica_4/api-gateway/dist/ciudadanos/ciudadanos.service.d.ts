import { ClientProxy } from '@nestjs/microservices';
import { CreateCiudadanoDto } from './dto/create-ciudadano.dto';
import { UpdateCiudadanoDto } from './dto/update-ciudadano.dto';
export declare class CiudadanosService {
    private readonly natsClient;
    constructor(natsClient: ClientProxy);
    create(createCiudadanoDto: CreateCiudadanoDto): import("rxjs").Observable<any>;
    findAll(): import("rxjs").Observable<any>;
    findOne(id: number): import("rxjs").Observable<any>;
    update(id: number, updateCiudadanoDto: UpdateCiudadanoDto): import("rxjs").Observable<any>;
    remove(id: number): import("rxjs").Observable<any>;
}
