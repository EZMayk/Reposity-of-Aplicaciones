import { Test, TestingModule } from '@nestjs/testing';
import { UbicacionResolver } from './ubicacion.resolver';
import { UbicacionService } from './ubicacion.service';

describe('UbicacionResolver', () => {
  let resolver: UbicacionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UbicacionResolver, UbicacionService],
    }).compile();

    resolver = module.get<UbicacionResolver>(UbicacionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
