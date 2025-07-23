import { Module } from '@nestjs/common';
import { ExportacionModule } from './exportacion/exportacion.module';

@Module({
  imports: [ExportacionModule],
})
export class AppModule {}
