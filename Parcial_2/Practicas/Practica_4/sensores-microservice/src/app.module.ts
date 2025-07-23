import { Module } from '@nestjs/common';
import { SensoresModule } from './sensores/sensores.module';

@Module({
  imports: [SensoresModule],
})
export class AppModule {}
