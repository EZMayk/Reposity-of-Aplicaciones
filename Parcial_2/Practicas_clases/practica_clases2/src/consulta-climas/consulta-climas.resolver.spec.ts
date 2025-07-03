import { Test, TestingModule } from '@nestjs/testing';
import { ConsultaClimasResolver } from './consulta-climas.resolver';
import { ConsultaClimasService } from './consulta-climas.service';

describe('ConsultaClimasResolver', () => {
  let resolver: ConsultaClimasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultaClimasResolver, ConsultaClimasService],
    }).compile();

    resolver = module.get<ConsultaClimasResolver>(ConsultaClimasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
