import { IClimaRepository } from "../../domain/repositories/IClimaRepository";
import { Clima } from "../../domain/entities/Clima";

export class ClimaService {
  constructor(private climaRepo: IClimaRepository) {}

  getClimas(): Promise<Clima[]> {
    return this.climaRepo.findAll();
  }

  getClimaById(id: number): Promise<Clima | null> {
    return this.climaRepo.findById(id);
  }

  createClima(clima: Clima): Promise<Clima> {
    return this.climaRepo.save(clima);
  }

  updateClima(id: number, clima: Clima): Promise<Clima> {
    return this.climaRepo.update(id, clima);
  }

  deleteClima(id: number): Promise<void> {
    return this.climaRepo.delete(id);
  }
}
