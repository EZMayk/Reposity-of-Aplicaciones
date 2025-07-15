import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClimaModule } from './clima/clima.module';
import { ConsultaClimaModule } from './consulta-clima/consulta-clima.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { Clima } from './clima/entities/clima.entity';
import { ConsultaClima } from './consulta-clima/entities/consulta-clima.entity';
import { Ubicacion } from './ubicacion/entities/ubicacion.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      autoLoadEntities: true,
      entities: [Clima, ConsultaClima, Ubicacion],
      synchronize: true,
    }),
    UbicacionModule,
    ClimaModule,
    ConsultaClimaModule,
  ],
})
export class AppModule {}
