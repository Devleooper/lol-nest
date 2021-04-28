import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { KeyValue } from '../../common/types';
import { Region } from '../../common/enums';
import { LeagueStatusService } from './league-status.service';
import { ApiClient } from '../client/api-client';

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
describe('LeagueStatusService', () => {
  let service: LeagueStatusService;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [LeagueStatusService, apiClientProvider],
    }).compile();

    service = module.get<LeagueStatusService>(LeagueStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
