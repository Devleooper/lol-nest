import { Test, TestingModule } from '@nestjs/testing';
import { ApiClientMock } from '../../test/common-mocks';
import { ApiClient } from '../client/api-client';
import { SpectatorService } from './spectator.service';

describe('SpectatorService', () => {
  let service: SpectatorService;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [SpectatorService , apiClientProvider],
    }).compile();

    service = module.get<SpectatorService>(SpectatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
