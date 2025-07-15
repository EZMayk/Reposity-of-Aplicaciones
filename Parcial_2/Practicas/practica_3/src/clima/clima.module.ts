import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clima } from './entities/clima.entity';
import { ClimaService } from './clima.service';
import { ClimaGateway } from './clima.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Clima])],
  providers: [ClimaService, ClimaGateway],
})
export class ClimaModule {}
