import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosGateway } from './gateways/usuarios.gateway';
import { MascotasGateway } from './gateways/mascotas.gateway';
import { FormulariosGateway } from './gateways/formularios.gateway';
import { UsuarioService } from './services/usuario.service';
import { MascotaService } from './services/mascota.service';
import { FormularioAdopcionService } from './services/formulario-adopcion.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    UsuarioService,
    MascotaService,
    FormularioAdopcionService,
    UsuariosGateway,
    MascotasGateway,
    FormulariosGateway,
  ],
})
export class AppModule {}
