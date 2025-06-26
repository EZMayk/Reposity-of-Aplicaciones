import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClimaService } from './clima.service';
import { ClimaController } from './clima.controller';
import { Clima } from './entities/clima.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clima])],
  controllers: [ClimaController],
  providers: [ClimaService],
})
export class ClimaModule {}
