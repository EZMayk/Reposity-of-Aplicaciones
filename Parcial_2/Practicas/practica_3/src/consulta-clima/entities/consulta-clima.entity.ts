import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Ubicacion } from 'src/ubicacion/entities/ubicacion.entity';
import { Clima } from 'src/clima/entities/clima.entity';

@Entity()
export class ConsultaClima {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.consultas, { eager: true })
  @JoinColumn({ name: 'ubicacionId' })
  ubicacion: Ubicacion;

  @ManyToOne(() => Clima, (clima) => clima.consultas, { eager: true })
  @JoinColumn({ name: 'climaId' })
  clima: Clima;
}
