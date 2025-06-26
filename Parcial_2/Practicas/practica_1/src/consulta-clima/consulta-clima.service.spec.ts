import { Test, TestingModule } from '@nestjs/testing';
import { ConsultaClimaService } from './consulta-clima.service';

describe('ConsultaClimaService', () => {
  let service: ConsultaClimaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultaClimaService],
    }).compile();

    service = module.get<ConsultaClimaService>(ConsultaClimaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
