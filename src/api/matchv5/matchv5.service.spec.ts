import { Test, TestingModule } from '@nestjs/testing';
import { ApiClientMock } from '../../test/common-mocks';
import { ApiClient } from '../client/api-client';
import { MatchV5Service } from './matchv5.service';

describe('MatchV5Service', () => {
  let service: MatchV5Service;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatchV5Service, apiClientProvider],
    }).compile();

    service = module.get<MatchV5Service>(MatchV5Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
