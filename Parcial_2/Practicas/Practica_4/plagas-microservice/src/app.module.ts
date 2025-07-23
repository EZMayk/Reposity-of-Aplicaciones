import { Module } from '@nestjs/common';
import { PlagasModule } from './plagas/plagas.module';

@Module({
  imports: [PlagasModule],
})
export class AppModule {}
