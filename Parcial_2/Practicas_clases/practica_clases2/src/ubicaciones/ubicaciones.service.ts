import { Injectable } from '@nestjs/common';
import { CreateUbicacioneInput } from './dto/create-ubicacione.input';
import { UpdateUbicacioneInput } from './dto/update-ubicacione.input';

@Injectable()
export class UbicacionesService {
  create(createUbicacioneInput: CreateUbicacioneInput) {
    return 'This action adds a new ubicacione';
  }

  findAll() {
    return `This action returns all ubicaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ubicacione`;
  }

  update(id: number, updateUbicacioneInput: UpdateUbicacioneInput) {
    return `This action updates a #${id} ubicacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} ubicacione`;
  }
}
