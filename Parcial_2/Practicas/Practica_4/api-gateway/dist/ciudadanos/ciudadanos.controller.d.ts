import { CiudadanosService } from './ciudadanos.service';
import { CreateCiudadanoDto } from './dto/create-ciudadano.dto';
import { UpdateCiudadanoDto } from './dto/update-ciudadano.dto';
export declare class CiudadanosController {
    private readonly ciudadanosService;
    constructor(ciudadanosService: CiudadanosService);
    create(createCiudadanoDto: CreateCiudadanoDto): import("rxjs").Observable<any>;
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    update(id: string, updateCiudadanoDto: UpdateCiudadanoDto): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
