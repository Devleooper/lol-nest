import { Test, TestingModule } from '@nestjs/testing';
import { LeagueStatusService } from './league-status.service';
import { ApiClient } from '../client/api-client';
import { ApiClientMock } from '../../test/common-mocks';
import { LOL_STATUS } from './routes';
import { testApiCall } from '../../test/common-api-test';
import { Region } from '../../common/enums';

describe('LeagueStatusService', () => {
  let service: LeagueStatusService;
  let apiClient: ApiClient;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [LeagueStatusService, apiClientProvider],
    }).compile();

    service = module.get<LeagueStatusService>(LeagueStatusService);
    apiClient = module.get<ApiClient>(ApiClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get Lol Status successfully', async () => {
    await testApiCall(
      LOL_STATUS,
      apiClient,
      async () => await service.getPLatformStatus(Region.EUW),
    );
  });
});
