import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ConsultaClima } from 'src/consulta-clima/entities/consulta-clima.entity';

@Entity()
export class Clima {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column('float')
  temperatura: number;

  @Column('float')
  humedad: number;

  @Column('float')
  viento: number;

  @OneToMany(() => ConsultaClima, (consulta) => consulta.clima)
  consultas: ConsultaClima[];
}
