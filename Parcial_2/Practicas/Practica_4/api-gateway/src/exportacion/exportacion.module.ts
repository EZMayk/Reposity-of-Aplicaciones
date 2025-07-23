import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ExportacionController } from './exportacion.controller';
import { ExportacionService } from './exportacion.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EXPORTACION_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
        },
      },
    ]),
  ],
  controllers: [ExportacionController],
  providers: [ExportacionService],
})
export class ExportacionModule {}
