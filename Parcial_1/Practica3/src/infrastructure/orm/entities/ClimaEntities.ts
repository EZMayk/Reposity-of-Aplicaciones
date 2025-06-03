import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("climas")
export class ClimaEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("float")
  temperatura!: number;

  @Column("float")
  humedad!: number;

  @Column("float")
  velocidadViento!: number;

  @Column("timestamp")
  fechaRegistro!: Date;

  @Column()
  zonaCultivo!: string;
}
