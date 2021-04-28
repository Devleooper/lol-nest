import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { Region } from '../../common/enums';
import { KeyValue } from '../../common/types';
import { ApiClient } from '../client/api-client';
import { MasteryService } from './mastery.service';

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
describe('MasteryService', () => {
  let service: MasteryService;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [MasteryService, apiClientProvider],
    }).compile();

    service = module.get<MasteryService>(MasteryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
