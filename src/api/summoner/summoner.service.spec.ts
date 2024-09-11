import { Test, TestingModule } from '@nestjs/testing';
import { Region } from '../../common/enums';
import { testApiCall } from '../../test/common-api-test';
import { ApiClientMock } from '../../test/common-mocks';
import { ApiClient } from '../client/api-client';
import {
  SUMMONER_BY_ACCOUNT_ID,
  SUMMONER_BY_ENCRYPTED_SUMMONER_ID,
  SUMMONER_BY_PUUID,
} from './routes';
import { SummonerService } from './summoner.service';

describe('SummonerService', () => {
  let service: SummonerService;
  let apiClient: ApiClient;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [SummonerService, apiClientProvider],
    }).compile();

    service = module.get<SummonerService>(SummonerService);
    apiClient = module.get<ApiClient>(ApiClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should getSummonerByEncryptedAccountId successfully', async () => {
    await testApiCall(
      SUMMONER_BY_ACCOUNT_ID,
      apiClient,
      async () =>
        await service.getSummonerByEncryptedAccountId(
          Region.LAN,
          'F5VYZfqGtulE7xfkiz2F_3o5mpMmljnkoLXpj5nS_XnFc34',
        ),
    );
  });

  it('should getSummonerByPUUID successfully', async () => {
    await testApiCall(
      SUMMONER_BY_PUUID,
      apiClient,
      async () =>
        await service.getSummonerByPUUID(
          Region.LAN,
          'ZefxIsxHfQVqXWEwUpr7FssfEyo7lBYJ8sOZxfoBNilUmXvwuZ42mMkTAuUaLCub55gfr9JZRQMtzA',
        ),
    );
  });

  it('should getSummonerByEncryptedId successfully', async () => {
    await testApiCall(
      SUMMONER_BY_ENCRYPTED_SUMMONER_ID,
      apiClient,
      async () =>
        await service.getSummonerByEncryptedSummonerId(
          Region.LAN,
          '9rW6cwmmzw48qIyHM2JHFzVF1MWcLBsgg8kNXfplI-0lTPQ',
        ),
    );
  });
});
