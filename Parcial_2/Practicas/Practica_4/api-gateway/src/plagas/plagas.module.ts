import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PlagasController } from './plagas.controller';
import { PlagasService } from './plagas.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PLAGAS_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
        },
      },
    ]),
  ],
  controllers: [PlagasController],
  providers: [PlagasService],
})
export class PlagasModule {}
