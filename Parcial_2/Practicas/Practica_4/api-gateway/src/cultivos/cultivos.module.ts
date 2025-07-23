import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CultivosController } from './cultivos.controller';
import { CultivosService } from './cultivos.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CULTIVOS_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
        },
      },
    ]),
  ],
  controllers: [CultivosController],
  providers: [CultivosService],
})
export class CultivosModule {}
