import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { Region } from '../../common/enums';
import { KeyValue } from '../../common/types';
import { ApiClient } from '../client/api-client';
import { SpectatorService } from './spectator.service';

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
describe('SpectatorService', () => {
  let service: SpectatorService;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [SpectatorService , apiClientProvider],
    }).compile();

    service = module.get<SpectatorService>(SpectatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
