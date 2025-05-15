import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Alerta } from "./Alertas";

@Entity()
export class Notificacion {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    mensaje!: string;

    @Column()
    leido!: boolean;

    @Column("timestamp")
    enviada_en!: Date;

    @OneToOne(() => Alerta, alerta => alerta.notificacion)
    @JoinColumn()
    alerta!: Alerta;
}
