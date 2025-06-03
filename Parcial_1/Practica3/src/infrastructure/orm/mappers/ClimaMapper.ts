import { Clima } from "../../../domain/entities/Clima";
import { ClimaEntity } from "../entities/ClimaEntities";

export class ClimaMapper {
  static toDomain(entity: ClimaEntity): Clima {
    return new Clima(
      entity.id,
      entity.temperatura,
      entity.humedad,
      entity.velocidadViento,
      entity.fechaRegistro,
      entity.zonaCultivo
    );
  }

  static toEntity(domain: Clima): ClimaEntity {
    const entity = new ClimaEntity();
    entity.id = domain.id;
    entity.temperatura = domain.temperatura;
    entity.humedad = domain.humedad;
    entity.velocidadViento = domain.velocidadViento;
    entity.fechaRegistro = domain.fechaRegistro;
    entity.zonaCultivo = domain.zonaCultivo;
    return entity;
  }
}
