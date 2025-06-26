import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsultaClimaService } from './consulta-clima.service';
import { ConsultaClimaController } from './consulta-clima.controller';
import { ConsultaClima } from './entities/consulta-clima.entity';
import { Ubicacion } from 'src/ubicacion/entities/ubicacion.entity';
import { Clima } from 'src/clima/entities/clima.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConsultaClima, Ubicacion, Clima])],
  controllers: [ConsultaClimaController],
  providers: [ConsultaClimaService],
})
export class ConsultaClimaModule {}
