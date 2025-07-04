import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbicacionService } from './ubicacion.service';
import { UbicacionResolver } from './ubicacion.resolver';
import { Ubicacion } from './entities/ubicacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ubicacion])],
  providers: [UbicacionService, UbicacionResolver],
  exports: [UbicacionService, TypeOrmModule], 
})
export class UbicacionModule {}
