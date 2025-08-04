import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsBoolean, IsUUID } from 'class-validator';

@InputType()
export class CreateFormularioAdopcionInput {
  @Field()
  @IsNotEmpty({ message: 'El ID del usuario es requerido' })
  @IsUUID('4', { message: 'El ID del usuario debe ser un UUID válido' })
  usuarioId: string;

  @Field()
  @IsNotEmpty({ message: 'El ID de la mascota es requerido' })
  @IsUUID('4', { message: 'El ID de la mascota debe ser un UUID válido' })
  mascotaId: string;

  @Field()
  @IsBoolean({ message: 'Debe indicar si ha tenido mascotas antes' })
  haTenidoMascotasAntes: boolean;

  @Field()
  @IsNotEmpty({ message: 'El tipo de vivienda es requerido' })
  @IsString({ message: 'El tipo de vivienda debe ser una cadena de texto' })
  tipoVivienda: string;
}
