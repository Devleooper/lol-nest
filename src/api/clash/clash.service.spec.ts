import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { Region } from '../../common/enums';
import { KeyValue } from '../../common/types';
import { ApiClient } from '../client/api-client';
import { ClashService } from './clash.service';

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
describe('ClashService', () => {
  let service: ClashService;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [ClashService, apiClientProvider],
    }).compile();

    service = module.get<ClashService>(ClashService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
