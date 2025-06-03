import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { ClimaEntity } from "../infrastructure/orm/entities/ClimaEntities";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "Maykel",
  password: "2025*_*",
  database: "Practica3",
  entities: [ClimaEntity],
  synchronize: true, // Solo en desarrollo
});
