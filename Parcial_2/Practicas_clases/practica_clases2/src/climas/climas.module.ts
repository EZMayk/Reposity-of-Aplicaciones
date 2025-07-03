import { Module } from '@nestjs/common';
import { ClimasService } from './climas.service';
import { ClimasResolver } from './climas.resolver';

@Module({
  providers: [ClimasResolver, ClimasService],
})
export class ClimasModule {}
