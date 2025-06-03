import { Request, Response } from "express";
import { ClimaService } from "../../application/services/ClimaService";
import { Clima } from "../../domain/entities/Clima";

export class ClimaController {
  constructor(private climaService: ClimaService) {}

  getAll = async (req: Request, res: Response) => {
    const climas = await this.climaService.getClimas();
    res.json(climas);
  };

  getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const clima = await this.climaService.getClimaById(id);
    clima ? res.json(clima) : res.status(404).send("No encontrado");
  };

  create = async (req: Request, res: Response) => {
    const clima = new Clima(
      0,
      req.body.temperatura,
      req.body.humedad,
      req.body.velocidadViento,
      new Date(req.body.fechaRegistro),
      req.body.zonaCultivo
    );
    const result = await this.climaService.createClima(clima);
    res.status(201).json(result);
  };

  update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const clima = new Clima(
      id,
      req.body.temperatura,
      req.body.humedad,
      req.body.velocidadViento,
      new Date(req.body.fechaRegistro),
      req.body.zonaCultivo
    );
    const result = await this.climaService.updateClima(id, clima);
    res.json(result);
  };

  delete = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await this.climaService.deleteClima(id);
    res.status(204).send();
  };
}
