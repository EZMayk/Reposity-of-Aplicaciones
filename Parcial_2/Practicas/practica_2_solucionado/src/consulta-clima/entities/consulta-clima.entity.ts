import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Ubicacion } from '../../ubicacion/entities/ubicacion.entity';
import { Clima } from '../../clima/entities/clima.entity';

@ObjectType()
@Entity()
export class ConsultaClima {
@Field(() => Int)
@PrimaryGeneratedColumn()
id: number;

@Field()
@Column()
fechaConsulta: Date;

@Field(() => Ubicacion)
@ManyToOne(() => Ubicacion, { eager: true })
ubicacion: Ubicacion;

@Field(() => Clima)
@ManyToOne(() => Clima, { eager: true })
clima: Clima;
}