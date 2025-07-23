import { Ciudadano } from './entities/ciudadano.entity';
import { CreateCiudadanoDto } from './dto/create-ciudadano.dto';
import { UpdateCiudadanoDto } from './dto/update-ciudadano.dto';
export declare class CiudadanosService {
    private ciudadanos;
    private idCounter;
    create(createCiudadanoDto: CreateCiudadanoDto): {
        activo: boolean;
        nombre: string;
        email: string;
        edad: number;
        id: number;
    };
    findAll(): Ciudadano[];
    findOne(id: number): Ciudadano;
    update(id: number, updateCiudadanoDto: UpdateCiudadanoDto): Ciudadano;
    remove(id: number): Ciudadano;
}
