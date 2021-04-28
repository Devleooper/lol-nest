import { Test, TestingModule } from '@nestjs/testing';
import { KeyValue } from '../../common/types';
import { Region } from '../../common/enums';
import { ApiClient } from '../client/api-client';
import { LeagueService } from './league.service';
import { of } from 'rxjs';

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

describe('LeagueService', () => {
  let service: LeagueService;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeagueService , apiClientProvider],
    }).compile();

    service = module.get<LeagueService>(LeagueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
