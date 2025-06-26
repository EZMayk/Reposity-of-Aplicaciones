// src/ubicacion/entities/ubicacion.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ConsultaClima } from 'src/consulta-clima/entities/consulta-clima.entity';

@Entity()
export class Ubicacion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  ciudad!: string;

  @Column()
  pais!: string;

  @Column('decimal')
  latitud!: number;

  @Column('decimal')
  longitud!: number;

  @OneToMany(() => ConsultaClima, consulta => consulta.ubicacion)
  consultas!: ConsultaClima[];
}
