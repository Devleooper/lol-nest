import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { Region } from '../../common/enums';
import { KeyValue } from '../../common/types';
import { ApiClient } from '../client/api-client';
import { SummonerService } from './summoner.service';

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
describe('SummonerService', () => {
  let service: SummonerService;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [SummonerService , apiClientProvider],
    }).compile();

    service = module.get<SummonerService>(SummonerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
