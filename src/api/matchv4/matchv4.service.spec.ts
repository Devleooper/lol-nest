import { Test, TestingModule } from '@nestjs/testing';
import { Region } from '../../common/enums';
import { testApiCall } from '../../test/common-api-test';
import { ApiClientMock } from '../../test/common-mocks';
import { ApiClient } from '../client/api-client';
import { MatchV4Service } from './matchv4.service';
import {
  MATCHES_BY_ENCRYPTED_ACCOUNT_ID,
  MATCHES_BY_TOURNAMENT_CODE,
  MATCH_BY_ID,
  MATCH_BY_MATCH_ID_AND_TOURNAMENT_CODE,
  MATCH_TIMELINE_BY_MATCH_ID,
} from './routes';

describe('MatchV4Service', () => {
  let service: MatchV4Service;
  let apiClient: ApiClient;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [MatchV4Service, apiClientProvider],
    }).compile();

    service = module.get<MatchV4Service>(MatchV4Service);
    apiClient = module.get<ApiClient>(ApiClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should getMatchById successfully', async () => {
   await testApiCall(
      MATCH_BY_ID,
      apiClient,
      async () => await service.getMatchById(Region.EUW, 1071008069),
    );
  });

  it('should getMatchById successfully', async () => {
    await testApiCall(
      MATCH_BY_ID,
      apiClient,
      async () => await service.getMatchById(Region.EUW, 1071008069),
    );
  });

  it('should getMatchHistory successfully', async () => {
    await testApiCall(
      MATCHES_BY_ENCRYPTED_ACCOUNT_ID,
      apiClient,
      async () =>
        await service.getMatchListHistory(
          Region.LAN,
          '9rW6cwmmzw48qIyHM2JHFzVF1MWcLBsgg8kNXfplI-0lTPQ',
          [
            { key: 'beginIndex', value: 0 },
            { key: 'endIndex', value: 20 },
          ],
        ),
    );
  });

  it('should getMatchTimeline successfully', async () => {
    await testApiCall(
      MATCH_TIMELINE_BY_MATCH_ID,
      apiClient,
      async () => await service.getMatchTimeline(Region.EUW, 1071008069),
    );
  });

  it('should getMatchesByTournamentCode successfully', async () => {
    await testApiCall(
      MATCHES_BY_TOURNAMENT_CODE,
      apiClient,
      async () =>
        await service.getMatchIdsByTournamentCode(Region.EUW, 'Ax2342asad'),
    );
  });

  it('should getMatchByMatchIdAndTournamentCode successfully', async () => {
    await testApiCall(
      MATCH_BY_MATCH_ID_AND_TOURNAMENT_CODE,
      apiClient,
      async () =>
        await service.getMatchByIdAndTournamentCode(
          Region.LAN,
          'Ax2342asad',
          1071008069,
        ),
    );
  });
});
