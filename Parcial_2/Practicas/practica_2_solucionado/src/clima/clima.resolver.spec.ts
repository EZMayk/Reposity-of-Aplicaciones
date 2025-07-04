import { Test, TestingModule } from '@nestjs/testing';
import { ClimaResolver } from './clima.resolver';
import { ClimaService } from './clima.service';

describe('ClimaResolver', () => {
  let resolver: ClimaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClimaResolver, ClimaService],
    }).compile();

    resolver = module.get<ClimaResolver>(ClimaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
