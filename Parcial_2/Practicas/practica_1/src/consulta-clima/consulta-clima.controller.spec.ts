import { Test, TestingModule } from '@nestjs/testing';
import { ConsultaClimaController } from './consulta-clima.controller';
import { ConsultaClimaService } from './consulta-clima.service';

describe('ConsultaClimaController', () => {
  let controller: ConsultaClimaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsultaClimaController],
      providers: [ConsultaClimaService],
    }).compile();

    controller = module.get<ConsultaClimaController>(ConsultaClimaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
