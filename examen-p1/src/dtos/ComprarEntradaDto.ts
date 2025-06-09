import { IsNotEmpty, IsUUID } from 'class-validator';

export class ComprarEntradaDto {
    @IsUUID()
    usuarioId!: string;

    @IsUUID()
    funcionId!: string;
}
