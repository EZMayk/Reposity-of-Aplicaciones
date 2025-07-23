import { Module } from '@nestjs/common';
import { PlagasController } from './plagas.controller';
import { PlagasService } from './plagas.service';

@Module({
  controllers: [PlagasController],
  providers: [PlagasService],
})
export class PlagasModule {}
