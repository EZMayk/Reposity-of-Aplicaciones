import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CiudadanosController } from './ciudadanos.controller';
import { CiudadanosService } from './ciudadanos.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: [process.env.NATS_SERVERS || 'nats://localhost:4222'],
        },
      },
    ]),
  ],
  controllers: [CiudadanosController],
  providers: [CiudadanosService],
})
export class CiudadanosModule {}
