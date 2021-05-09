import { Test, TestingModule } from '@nestjs/testing';
import { Region } from '../../common/enums';
import { testApiCall } from '../../test/common-api-test';
import { ApiClientMock } from '../../test/common-mocks';
import { ApiClient } from '../client/api-client';
import { ClashService } from './clash.service';
import {
  PLAYERS_BY_SUMMONER_ID,
  TEAM_BY_ID,
  TOURNAMENTS,
  TOURNAMENT_BY_ID,
  TOURNAMENT_BY_TEAM_ID,
} from './routes';

describe('ClashService', () => {
  let service: ClashService;
  let apiClient: ApiClient;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [ClashService, apiClientProvider],
    }).compile();

    service = module.get<ClashService>(ClashService);
    apiClient = module.get<ApiClient>(ApiClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should getClashPlayersBySummonerId successfully', async () => {
    await testApiCall(
      PLAYERS_BY_SUMMONER_ID,
      apiClient,
      async () =>
        await service.getClashPlayersBySummonerId(
          Region.LAN,
          'example-summoner-id',
        ),
    );
  });

  it('should getTeamById successfully', async () => {
    await testApiCall(
      TEAM_BY_ID,
      apiClient,
      async () => await service.getTeamById(Region.NA, 'example-team-id'),
    );
  });

  it('should getTournaments successfully', async () => {
    await testApiCall(
      TOURNAMENTS,
      apiClient,
      async () => await service.getTournaments(Region.EUW),
    );
  });

  it('should getTournamentByTeamId successfully', async () => {
    await testApiCall(
      TOURNAMENT_BY_TEAM_ID,
      apiClient,
      async () =>
        await service.getTournamentByTeamId(Region.EUW, 'example-team-id'),
    );
  });

  it('should getTournamentById successfully', async () => {
    await testApiCall(
      TOURNAMENT_BY_ID,
      apiClient,
      async () =>
        await service.getTournamentById(Region.KOREA, 'example-tournament-id'),
    );
  });
});
