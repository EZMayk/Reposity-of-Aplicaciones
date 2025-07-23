import { IsString, IsEmail, IsNumber, Min } from 'class-validator';
export class CreateCiudadanoDto {
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @IsNumber()
  @Min(0)
  edad: number;
}
