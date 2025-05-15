import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Notificacion } from "./Notificacion";

@Entity()
export class Alerta {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    tipo_evento!: string;

    @Column()
    mensaje!: string;

    @Column("timestamp")
    detectada_en!: Date;

    @Column()
    nivel_riesgo!: string;

    @Column()
    ubicacion!: string;

    @OneToOne(() => Notificacion, noti => noti.alerta)
    notificacion!: Notificacion;
}
