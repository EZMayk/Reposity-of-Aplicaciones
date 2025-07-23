import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClimaController } from './clima.controller';
import { ClimaService } from './clima.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CLIMA_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
        },
      },
    ]),
  ],
  controllers: [ClimaController],
  providers: [ClimaService],
})
export class ClimaModule {}
