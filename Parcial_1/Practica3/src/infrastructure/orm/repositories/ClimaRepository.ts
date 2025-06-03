import { Clima } from "../../../domain/entities/Clima";
import { IClimaRepository } from "../../../domain/repositories/IClimaRepository";

export class ClimaRepository implements IClimaRepository {
  private climaList: Clima[] = [];

  async findAll(): Promise<Clima[]> {
    return this.climaList;
  }

  async findById(id: number): Promise<Clima | null> {
    return this.climaList.find(c => c.id === id) || null;
  }

  async save(clima: Clima): Promise<Clima> {
    this.climaList.push(clima);
    return clima;
  }

  async update(id: number, clima: Clima): Promise<Clima> {
    const index = this.climaList.findIndex(c => c.id === id);
    if (index !== -1) {
      this.climaList[index] = clima;
      return clima;
    }
    throw new Error("Clima no encontrado");
  }

  async delete(id: number): Promise<void> {
    this.climaList = this.climaList.filter(c => c.id !== id);
  }
}
