import { Injectable } from '@nestjs/common';
import { CreateClimaInput } from './dto/create-clima.input';
import { UpdateClimaInput } from './dto/update-clima.input';

@Injectable()
export class ClimasService {
  create(createClimaInput: CreateClimaInput) {
    return 'This action adds a new clima';
  }

  findAll() {
    return `This action returns all climas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clima`;
  }

  update(id: number, updateClimaInput: UpdateClimaInput) {
    return `This action updates a #${id} clima`;
  }

  remove(id: number) {
    return `This action removes a #${id} clima`;
  }
}
