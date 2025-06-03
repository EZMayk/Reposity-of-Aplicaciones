import 'reflect-metadata';
import { DataSource } from "typeorm";
import { Clima } from "./models/Clima";
import { Alerta } from "./models/Alertas";
import { ConsultaAPI } from "./models/APIClima";
import { Notificacion } from "./models/Notificacion";
import { TareaProgramada } from "./models/Tarea_Programada";


    export const appdataSource = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "2025*_*",
        database: "postgres",
        synchronize: true,
        logging: true,
        entities: [Clima,ConsultaAPI,Alerta,Notificacion,TareaProgramada],
        subscribers: [],
        migrations: [],

    })

