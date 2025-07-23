import { Module } from '@nestjs/common';
import { CultivosModule } from './cultivos/cultivos.module';

@Module({
  imports: [CultivosModule],
})
export class AppModule {}
