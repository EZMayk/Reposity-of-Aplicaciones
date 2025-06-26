import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UbicacionModule } from './ubicacion/ubicacion.module';
import { ClimaModule } from './clima/clima.module';
import { ConsultaClimaModule } from './consulta-clima/consulta-clima.module';

import { Ubicacion } from './ubicacion/entities/ubicacion.entity';
import { Clima } from './clima/entities/clima.entity';
import { ConsultaClima } from './consulta-clima/entities/consulta-clima.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'clima.db',      
      entities: [Ubicacion, Clima, ConsultaClima],
      synchronize: true,         
      logging: true,             
    }),
    UbicacionModule,
    ClimaModule,
    ConsultaClimaModule,
  ],
})
export class AppModule {}