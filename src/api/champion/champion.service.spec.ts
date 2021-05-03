import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { mocks } from '../../test/api-mocks';
import { Region } from '../../common/enums';
import { ChampionInfo, KeyValue } from '../../common/types';
import { ApiClient } from '../client/api-client';
import { ChampionService } from './champion.service';
import { CHAMPION_ROTATIONS } from './routes';
import { ApiClientMock } from '../../test/common-mocks';
import { testApiCall } from '../../test/common-api-test';

describe('ChampionService', () => {
  let service: ChampionService;
  let apiClient: ApiClient;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChampionService, apiClientProvider],
    }).compile();

    service = module.get<ChampionService>(ChampionService);
    apiClient = module.get<ApiClient>(ApiClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should getChampionRotations successfully', async () => {
    testApiCall(
      CHAMPION_ROTATIONS,
      apiClient,
      async () => await service.getChampionRotations(Region.LAN),
    );
  });
});
