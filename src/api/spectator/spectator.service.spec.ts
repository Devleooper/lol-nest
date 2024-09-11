import { Test, TestingModule } from '@nestjs/testing';
import { Region } from '../../common/enums';
import { testApiCall } from '../../test/common-api-test';
import { ApiClientMock } from '../../test/common-mocks';
import { ApiClient } from '../client/api-client';
import { ACTIVE_GAME_BY_ENCRYPTED_PUUID, FEATURED_GAMES } from './routes';
import { SpectatorService } from './spectator.service';

describe('SpectatorService', () => {
  let service: SpectatorService;
  let apiClient: ApiClient;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [SpectatorService, apiClientProvider],
    }).compile();

    service = module.get<SpectatorService>(SpectatorService);
    apiClient = module.get<ApiClient>(ApiClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should getCurrentGameByPUUID successfully', async () => {
    await testApiCall(
      ACTIVE_GAME_BY_ENCRYPTED_PUUID,
      apiClient,
      async () =>
        await service.getActiveGameByEncryptedPUUID(
          Region.LAN,
          'SDV7JC8fkb6c5PSoCRTINC_vMjrKY6iI1Bz9Z8lh-yBrUAQ',
        ),
    );
  });

  it('should getFeaturedGames successfully', async () => {
    await testApiCall(
      FEATURED_GAMES,
      apiClient,
      async () => await service.getFeaturedGames(Region.LAN),
    );
  });
});
