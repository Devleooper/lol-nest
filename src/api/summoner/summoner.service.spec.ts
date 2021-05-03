import { Test, TestingModule } from '@nestjs/testing';
import { ApiClientMock } from '../../test/common-mocks';
import { ApiClient } from '../client/api-client';
import { SummonerService } from './summoner.service';

describe('SummonerService', () => {
  let service: SummonerService;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [SummonerService , apiClientProvider],
    }).compile();

    service = module.get<SummonerService>(SummonerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
