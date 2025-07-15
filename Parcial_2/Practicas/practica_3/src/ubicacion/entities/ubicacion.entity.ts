import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ConsultaClima } from 'src/consulta-clima/entities/consulta-clima.entity';

@Entity()
export class Ubicacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ciudad: string;

  @Column()
  pais: string;

  @Column()
  latitud: string;

  @Column()
  longitud: string;

  @OneToMany(() => ConsultaClima, (consulta) => consulta.ubicacion)
  consultas: ConsultaClima[];
}
