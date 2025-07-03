import { Test, TestingModule } from '@nestjs/testing';
import { ClimasService } from './climas.service';

describe('ClimasService', () => {
  let service: ClimasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClimasService],
    }).compile();

    service = module.get<ClimasService>(ClimasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
