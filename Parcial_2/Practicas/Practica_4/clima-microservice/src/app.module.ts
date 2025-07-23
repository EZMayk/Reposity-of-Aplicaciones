import { Module } from '@nestjs/common';
import { ClimaModule } from './clima/clima.module';

@Module({
  imports: [ClimaModule],
})
export class AppModule {}
