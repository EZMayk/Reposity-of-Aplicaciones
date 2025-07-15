import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsultaClima } from './entities/consulta-clima.entity';
import { ConsultaClimaService } from './consulta-clima.service';
import { ConsultaClimaGateway } from './consulta-clima.gateway';
import { Ubicacion } from 'src/ubicacion/entities/ubicacion.entity';
import { Clima } from 'src/clima/entities/clima.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConsultaClima, Ubicacion, Clima])],
  providers: [ConsultaClimaService, ConsultaClimaGateway],
})
export class ConsultaClimaModule {}
