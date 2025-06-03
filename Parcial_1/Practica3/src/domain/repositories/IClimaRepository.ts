import { Clima } from "../entities/Clima";

export interface IClimaRepository {
  findAll(): Promise<Clima[]>;
  findById(id: number): Promise<Clima | null>;
  save(clima: Clima): Promise<Clima>;
  update(id: number, clima: Clima): Promise<Clima>;
  delete(id: number): Promise<void>;
}
