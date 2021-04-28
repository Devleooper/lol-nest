import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { Region } from '../../common/enums';
import { KeyValue } from '../../common/types';
import { ApiClient } from '../client/api-client';
import { ChampionService } from './champion.service';

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

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChampionService, apiClientProvider],
    }).compile();

    service = module.get<ChampionService>(ChampionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
