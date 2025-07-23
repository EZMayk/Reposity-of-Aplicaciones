import { CiudadanosService } from './ciudadanos.service';
import { CreateCiudadanoDto } from './dto/create-ciudadano.dto';
import { UpdateCiudadanoDto } from './dto/update-ciudadano.dto';
export declare class CiudadanosController {
    private readonly ciudadanosService;
    constructor(ciudadanosService: CiudadanosService);
    create(createCiudadanoDto: CreateCiudadanoDto): {
        activo: boolean;
        nombre: string;
        email: string;
        edad: number;
        id: number;
    };
    findAll(): import("./entities/ciudadano.entity").Ciudadano[];
    findOne(id: number): import("./entities/ciudadano.entity").Ciudadano;
    update(payload: {
        id: number;
        updateCiudadanoDto: UpdateCiudadanoDto;
    }): import("./entities/ciudadano.entity").Ciudadano;
    remove(id: number): import("./entities/ciudadano.entity").Ciudadano;
}
