import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ubicacion } from './entities/ubicacion.entity';
import { UbicacionService } from './ubicacion.service';
import { UbicacionGateway } from './ubicacion.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Ubicacion])],
  providers: [UbicacionService, UbicacionGateway],
})
export class UbicacionModule {}
