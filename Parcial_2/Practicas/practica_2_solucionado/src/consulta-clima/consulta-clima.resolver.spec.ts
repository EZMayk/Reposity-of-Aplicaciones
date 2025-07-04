import { Test, TestingModule } from '@nestjs/testing';
import { ConsultaClimaResolver } from './consulta-clima.resolver';
import { ConsultaClimaService } from './consulta-clima.service';

describe('ConsultaClimaResolver', () => {
  let resolver: ConsultaClimaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultaClimaResolver, ConsultaClimaService],
    }).compile();

    resolver = module.get<ConsultaClimaResolver>(ConsultaClimaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
