import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClimaService } from './clima.service';
import { ClimaResolver } from './clima.resolver';
import { Clima } from './entities/clima.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clima])], // 👈 Registro del repositorio
  providers: [ClimaResolver, ClimaService],
  exports: [ClimaService, TypeOrmModule], // opcional
})
export class ClimaModule {}
