import { Test, TestingModule } from '@nestjs/testing';
import { Region } from '../../common/enums';
import { testApiCall } from '../../test/common-api-test';
import { ApiClientMock } from '../../test/common-mocks';
import { ApiClient } from '../client/api-client';
import { MasteryService } from './mastery.service';
import {
  MASTERY_BY_ENCRYPTED_PUUID,
  MASTERY_BY_ENCRYPTED_PUUID_AND_CHAMPION_ID,
  MASTERY_SCORE_BY_ENCRYPTED_PUUID,
} from './routes';

describe('MasteryService', () => {
  let service: MasteryService;
  let apiClient: ApiClient;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [MasteryService, apiClientProvider],
    }).compile();

    service = module.get<MasteryService>(MasteryService);
    apiClient = module.get<ApiClient>(ApiClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should getChampionMasteries successfully', async () => {
    await testApiCall(
      MASTERY_BY_ENCRYPTED_PUUID,
      apiClient,
      async () =>
        await service.getChampionMasteriesByEncryptedSummonerId(
          Region.EUW,
          '9rW6cwmmzw48qIyHM2JHFzVF1MWcLBsgg8kNXfplI-0lTPQ',
        ),
    );
  });

  it('should getChampionMastery successfully', async () => {
    await testApiCall(
      MASTERY_BY_ENCRYPTED_PUUID_AND_CHAMPION_ID,
      apiClient,
      async () =>
        await service.getChampionMastery(
          Region.LAN,
          '9rW6cwmmzw48qIyHM2JHFzVF1MWcLBsgg8kNXfplI-0lTPQ',
          '126',
        ),
    );
  });

  it('should getMasteryScore successfully', async () => {
    await testApiCall(
      MASTERY_SCORE_BY_ENCRYPTED_PUUID,
      apiClient,
      async () =>
        await service.getMasteryScore(
          Region.LAN,
          '9rW6cwmmzw48qIyHM2JHFzVF1MWcLBsgg8kNXfplI-0lTPQ',
        ),
    );
  });
});
