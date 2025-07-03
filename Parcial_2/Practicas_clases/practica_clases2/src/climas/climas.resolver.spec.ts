import { Test, TestingModule } from '@nestjs/testing';
import { ClimasResolver } from './climas.resolver';
import { ClimasService } from './climas.service';

describe('ClimasResolver', () => {
  let resolver: ClimasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClimasResolver, ClimasService],
    }).compile();

    resolver = module.get<ClimasResolver>(ClimasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
