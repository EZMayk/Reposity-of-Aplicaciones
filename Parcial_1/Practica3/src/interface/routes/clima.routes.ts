import { Router } from "express";
import { ClimaController } from "../controllers/ClimaController";
import { ClimaService } from "../../application/services/ClimaService";
import { ClimaRepository } from "../../infrastructure/orm/repositories/ClimaRepository";

const climaRepo = new ClimaRepository();
const climaService = new ClimaService(climaRepo);
const climaController = new ClimaController(climaService);

const router = Router();

router.get("/", climaController.getAll);
router.get("/:id", climaController.getById);
router.post("/", climaController.create);
router.put("/:id", climaController.update);
router.delete("/:id", climaController.delete);

export default router;
