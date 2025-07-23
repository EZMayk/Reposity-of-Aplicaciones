import { Injectable } from '@nestjs/common';
import { Exportacion } from './exportacion.entity';
import { CreateExportacionDto } from './dto/create-exportacion.dto';
import { UpdateExportacionDto } from './dto/update-exportacion.dto';

@Injectable()
export class ExportacionService {
  private exportaciones: Exportacion[] = [];
  private idCounter = 1;

  findAll(): Exportacion[] {
    return this.exportaciones;
  }

  findOne(id: number): Exportacion {
    return this.exportaciones.find(exportacion => exportacion.id === id);
  }

  create(createExportacionDto: CreateExportacionDto): Exportacion {
    const exportacion = new Exportacion({
      id: this.idCounter++,
      ...createExportacionDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    this.exportaciones.push(exportacion);
    return exportacion;
  }

  update(id: number, updateExportacionDto: UpdateExportacionDto): Exportacion {
    const index = this.exportaciones.findIndex(exportacion => exportacion.id === id);
    if (index !== -1) {
      this.exportaciones[index] = {
        ...this.exportaciones[index],
        ...updateExportacionDto,
        updatedAt: new Date(),
      };
      return this.exportaciones[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.exportaciones.findIndex(exportacion => exportacion.id === id);
    if (index !== -1) {
      this.exportaciones.splice(index, 1);
      return true;
    }
    return false;
  }
}
