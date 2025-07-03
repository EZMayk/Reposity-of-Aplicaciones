import { Test, TestingModule } from '@nestjs/testing';
import { ConsultaClimasService } from './consulta-climas.service';

describe('ConsultaClimasService', () => {
  let service: ConsultaClimasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultaClimasService],
    }).compile();

    service = module.get<ConsultaClimasService>(ConsultaClimasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
