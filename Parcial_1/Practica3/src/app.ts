import climaRoutes from "./interface/routes/clima.routes";
import express from "express";
import { iniciar } from "./interface/database";

// Iniciar base de datos
(async () => {
  try {
    await iniciar();

  console.log("Servidor corriendo en http://localhost:3000");

  } catch (error) {
    console.error('❌ Error al conectar a la base de datos', error);
  }
})();
const app = express();
app.use(express.json());
app.use("/api/climas", climaRoutes);
