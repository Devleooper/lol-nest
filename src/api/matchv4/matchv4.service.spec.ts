import { Test, TestingModule } from '@nestjs/testing';
import { ApiClientMock } from '../../test/common-mocks';
import { ApiClient } from '../client/api-client';
import { MatchV4Service } from './matchv4.service';

describe('MatchService', () => {
  let service: MatchV4Service;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [MatchV4Service, apiClientProvider],
    }).compile();

    service = module.get<MatchV4Service>(MatchV4Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
