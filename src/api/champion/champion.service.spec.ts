import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { mocks } from '../../test/api-mocks';
import { Region } from '../../common/enums';
import { ChampionInfo, KeyValue } from '../../common/types';
import { ApiClient } from '../client/api-client';
import { ChampionService } from './champion.service';
import { CHAMPION_ROTATIONS } from './routes';

class ApiClientMock {
  executeGet(
    region: Region,
    location: string,
    paths: KeyValue[] = [],
    queries: KeyValue[] = [],
  ) {
    return of({});
  }
}
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

  it('should get champion rotations successfully', async () => {
    const apiClientSpy = jest
      .spyOn(apiClient, 'executeGet')
      .mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve(mocks[CHAMPION_ROTATIONS]), 2000),
          ),
      );

    const result = await service.getChampionRotations(Region.LAN);

    expect(apiClientSpy).toBeCalledWith(Region.LAN , CHAMPION_ROTATIONS);
    expect(result).toBe(mocks[CHAMPION_ROTATIONS]);
  });
});
