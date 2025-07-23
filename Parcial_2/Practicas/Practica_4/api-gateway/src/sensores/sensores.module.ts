import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SensoresController } from './sensores.controller';
import { SensoresService } from './sensores.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SENSORES_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
        },
      },
    ]),
  ],
  controllers: [SensoresController],
  providers: [SensoresService],
})
export class SensoresModule {}
