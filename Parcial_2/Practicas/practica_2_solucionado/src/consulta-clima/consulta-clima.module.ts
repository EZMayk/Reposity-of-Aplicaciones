import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsultaClimaService } from './consulta-clima.service';
import { ConsultaClimaResolver } from './consulta-clima.resolver';
import { ConsultaClima } from './entities/consulta-clima.entity';
import { Ubicacion } from '../ubicacion/entities/ubicacion.entity';
import { Clima } from '../clima/entities/clima.entity';
import { UbicacionModule } from '../ubicacion/ubicacion.module';
import { ClimaModule } from '../clima/clima.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ConsultaClima, Ubicacion, Clima]),
    UbicacionModule,
    ClimaModule
  ],
  providers: [ConsultaClimaService, ConsultaClimaResolver],
})
export class ConsultaClimaModule {}
