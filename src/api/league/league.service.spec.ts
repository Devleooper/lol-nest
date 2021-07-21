import { Test, TestingModule } from '@nestjs/testing';
import { ApiClient } from '../client/api-client';
import { LeagueService } from './league.service';
import { ApiClientMock } from '../../test/common-mocks';
import {
  CHALLENGER_LEAGUE_BY_QUEUE,
  GRANDMASTER_LEAGUE_BY_QUEUE,
  LEAGUES_BY_ENCRYPTED_SUMMONER_ID,
  LEAGUE_BY_ID,
  LEAGUE_ENTRIES,
  MASTER_LEAGUE_BY_QUEUE,
} from './routes';
import { testApiCall } from '../../test/common-api-test';
import { QueueType, Rank, Region, Tier } from '../../common/enums';
describe('LeagueService', () => {
  let service: LeagueService;
  let apiClient: ApiClient;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeagueService, apiClientProvider],
    }).compile();

    service = module.get<LeagueService>(LeagueService);
    apiClient = module.get<ApiClient>(ApiClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should getChallengerLeaguesByQueue successfully', async () => {
    await testApiCall(
      CHALLENGER_LEAGUE_BY_QUEUE,
      apiClient,
      async () =>
        await service.getChallengerLeagueByQueue(
          Region.EUW,
          QueueType.SOLO_QUEUE,
        ),
    );
  });

  it('should getLeaguesBySummonerId  successfully', async () => {
    await testApiCall(
      LEAGUES_BY_ENCRYPTED_SUMMONER_ID,
      apiClient,
      async () =>
        await service.getLeagueEntriesForForSummoner(
          Region.LAN,
          'WEmlXhXD4YgjTFnYCQuPUOcIQWU0c8eX5gfCFSPcjCnfFQ',
        ),
    );
  });

  it('should getLeagueEntries successfully', async () => {
    await testApiCall(
      LEAGUE_ENTRIES,
      apiClient,
      async () =>
        await service.getLeagueEntries(
          Region.NA,
          QueueType.SOLO_QUEUE,
          Tier.DIAMOND,
          Rank.I,
          0,
        ),
    );
  });

  it('should getGrandMasterLeaguesByQueue successfully', async () => {
    await testApiCall(
      GRANDMASTER_LEAGUE_BY_QUEUE,
      apiClient,
      async () =>
        await service.getGrandMasterLeagueByQueue(
          Region.NA,
          QueueType.SOLO_QUEUE,
        ),
    );
  });

  it('should getLeagueById successfully', async () => {
    await testApiCall(
      LEAGUE_BY_ID,
      apiClient,
      async () =>
        await service.getLeagueById(
          Region.LAS,
          '2081db1c-5b4e-356c-8950-a7a18b09728f',
        ),
    );
  });

  it('should getMasterLeagueByQueue successfully', async () => {
    await testApiCall(
      MASTER_LEAGUE_BY_QUEUE,
      apiClient,
      async () =>
        await service.getMasterLeagueByQueue(Region.LAS, QueueType.SOLO_QUEUE),
    );
  });
});
