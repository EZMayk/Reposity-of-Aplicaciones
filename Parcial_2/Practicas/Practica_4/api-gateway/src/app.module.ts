import { Module } from '@nestjs/common';
import { CiudadanosModule } from './ciudadanos/ciudadanos.module';
import { CultivosModule } from './cultivos/cultivos.module';
import { SensoresModule } from './sensores/sensores.module';
import { ClimaModule } from './clima/clima.module';
import { PlagasModule } from './plagas/plagas.module';
import { ExportacionModule } from './exportacion/exportacion.module';

@Module({
  imports: [
    CiudadanosModule,
    CultivosModule,
    SensoresModule,
    ClimaModule,
    PlagasModule,
    ExportacionModule,
  ],
})
export class AppModule {}
