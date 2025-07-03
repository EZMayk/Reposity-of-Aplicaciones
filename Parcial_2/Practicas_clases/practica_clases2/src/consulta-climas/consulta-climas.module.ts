import { Module } from '@nestjs/common';
import { ConsultaClimasService } from './consulta-climas.service';
import { ConsultaClimasResolver } from './consulta-climas.resolver';

@Module({
  providers: [ConsultaClimasResolver, ConsultaClimasService],
})
export class ConsultaClimasModule {}
