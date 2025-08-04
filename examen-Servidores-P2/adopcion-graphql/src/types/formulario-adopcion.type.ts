import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { IFormularioAdopcion, EstadoSolicitud } from '../interfaces/formulario-adopcion.interface';
import { Usuario } from './usuario.type';
import { Mascota } from './mascota.type';

// Registrar enum para GraphQL
registerEnumType(EstadoSolicitud, {
  name: 'EstadoSolicitud',
  description: 'Estados posibles de una solicitud de adopción',
});

@ObjectType()
export class FormularioAdopcion implements IFormularioAdopcion {
  @Field(() => ID)
  id: string;

  @Field()
  usuarioId: string;

  @Field()
  mascotaId: string;

  @Field(() => Usuario, { nullable: true })
  usuario?: Usuario;

  @Field(() => Mascota, { nullable: true })
  mascota?: Mascota;

  @Field()
  haTenidoMascotasAntes: boolean;

  @Field()
  tipoVivienda: string;

  @Field()
  fechaSolicitud: Date;

  @Field(() => EstadoSolicitud)
  estado: EstadoSolicitud;

  constructor(
    id: string,
    usuarioId: string,
    mascotaId: string,
    haTenidoMascotasAntes: boolean,
    tipoVivienda: string,
    fechaSolicitud: Date = new Date(),
    estado: EstadoSolicitud = EstadoSolicitud.PENDIENTE,
  ) {
    this.id = id;
    this.usuarioId = usuarioId;
    this.mascotaId = mascotaId;
    this.haTenidoMascotasAntes = haTenidoMascotasAntes;
    this.tipoVivienda = tipoVivienda;
    this.fechaSolicitud = fechaSolicitud;
    this.estado = estado;
  }
}
