import { Test, TestingModule } from '@nestjs/testing';
import { AccountService } from './account.service';
import { ApiClient } from '../client/api-client';
import { ApiClientMock } from '../../test/common-mocks';
import { ContinentalRegion } from '../../common/enums';
import { ACCOUNT_BY_PUUID, ACCOUNT_BY_RIOT_ID } from './routes';
import { testApiCall } from '../../test/common-api-test';

describe('AccountService', () => {
  let service: AccountService;
  let apiClient: ApiClient;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountService, apiClientProvider],
    }).compile();

    service = module.get<AccountService>(AccountService);
    apiClient = module.get<ApiClient>(ApiClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should getAccountByPuuid successfully', async () => {
    await testApiCall(
      ACCOUNT_BY_PUUID,
      apiClient,
      async () =>
        await service.getAccountByPUUID(
          ContinentalRegion.AMERICAS,
          'random-puuid',
        ),
    );
  });

  it('should getAccountByRiotId successfully', async () => {
    await testApiCall(
      ACCOUNT_BY_RIOT_ID,
      apiClient,
      async () =>
        await service.getAccountByRiotId(
          ContinentalRegion.AMERICAS,
          'random-game-name',
          'random-tag-line',
        ),
    );
  });
});
