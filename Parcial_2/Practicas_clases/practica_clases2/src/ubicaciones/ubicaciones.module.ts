import { Module } from '@nestjs/common';
import { UbicacionesService } from './ubicaciones.service';
import { UbicacionesResolver } from './ubicaciones.resolver';

@Module({
  providers: [UbicacionesResolver, UbicacionesService],
})
export class UbicacionesModule {}
