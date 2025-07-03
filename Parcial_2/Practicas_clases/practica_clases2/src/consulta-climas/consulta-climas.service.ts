import { Injectable } from '@nestjs/common';
import { CreateConsultaClimaInput } from './dto/create-consulta-clima.input';
import { UpdateConsultaClimaInput } from './dto/update-consulta-clima.input';

@Injectable()
export class ConsultaClimasService {
  create(createConsultaClimaInput: CreateConsultaClimaInput) {
    return 'This action adds a new consultaClima';
  }

  findAll() {
    return `This action returns all consultaClimas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consultaClima`;
  }

  update(id: number, updateConsultaClimaInput: UpdateConsultaClimaInput) {
    return `This action updates a #${id} consultaClima`;
  }

  remove(id: number) {
    return `This action removes a #${id} consultaClima`;
  }
}
