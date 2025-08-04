import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './controllers/usuario.controller';
import { MascotaController } from './controllers/mascota.controller';
import { FormularioAdopcionController } from './controllers/formulario-adopcion.controller';
import { UsuarioService } from './services/usuario.service';
import { MascotaService } from './services/mascota.service';
import { FormularioAdopcionService } from './services/formulario-adopcion.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsuarioController,
    MascotaController,
    FormularioAdopcionController
  ],
  providers: [
    AppService,
    UsuarioService,
    MascotaService,
    FormularioAdopcionService
  ],
})
export class AppModule {}
