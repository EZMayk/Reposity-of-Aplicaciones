import { IsDateString, IsInt } from 'class-validator';

export class CreateConsultaClimaDto {
  @IsDateString()
  fecha: string;

  @IsInt()
  ubicacionId: number;

  @IsInt()
  climaId: number;
}
