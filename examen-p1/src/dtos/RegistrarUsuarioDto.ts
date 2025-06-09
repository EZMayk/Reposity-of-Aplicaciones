import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegistrarUsuarioDto {
    @IsNotEmpty()
    nombre!: string;

    @IsEmail()
    correo!: string;

    @MinLength(6)
    contraseña!: string;
}
