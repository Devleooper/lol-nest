import { Test, TestingModule } from '@nestjs/testing';
import { ContinentalRegion } from '../../common/enums';
import { testApiCall } from '../../test/common-api-test';
import { ApiClientMock } from '../../test/common-mocks';
import { ApiClient } from '../client/api-client';
import { MatchV5Service } from './matchv5.service';
import {
  MATCHES_BY_PUUID,
  MATCH_BY_ID,
  MATCH_TIMELINE_BY_MATCH_ID,
} from './routes';

describe('MatchV5Service', () => {
  let service: MatchV5Service;
  let apiClient: ApiClient;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatchV5Service, apiClientProvider],
    }).compile();

    service = module.get<MatchV5Service>(MatchV5Service);
    apiClient = module.get<ApiClient>(ApiClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should getMatchesByPUUID successfully', async () => {
    await testApiCall(
      MATCHES_BY_PUUID,
      apiClient,
      async () =>
        await service.getMatchesByPuuid(
          ContinentalRegion.AMERICAS,
          '9uUZnM8J3qrnpEfJq8GKNzEA6hWLGP00thn3OqlgWKy4GoZHbTN4rS714JvhAjajFBKfuqvaV3fP-Q',
          0,
          20,
        ),
    );
  });

  it('should getMatchById successfully', async () => {
    await testApiCall(
      MATCH_BY_ID,
      apiClient,
      async () =>
        await service.getMatchById(
          ContinentalRegion.AMERICAS,
          'LA1_1071008069',
        ),
    );
  });

  it('should getMatchTimeline successfully', async () => {
    await testApiCall(
      MATCH_TIMELINE_BY_MATCH_ID,
      apiClient,
      async () =>
        await service.getMatchTimeline(
          ContinentalRegion.AMERICAS,
          'LA1_1071008069',
        ),
    );
  });
});
