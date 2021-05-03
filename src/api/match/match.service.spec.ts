import { Test, TestingModule } from '@nestjs/testing';
import { ApiClientMock } from '../../test/common-mocks';
import { ApiClient } from '../client/api-client';
import { MatchService } from './match.service';

describe('MatchService', () => {
  let service: MatchService;

  beforeEach(async () => {
    const apiClientProvider = {
      provide: ApiClient,
      useClass: ApiClientMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [MatchService, apiClientProvider],
    }).compile();

    service = module.get<MatchService>(MatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
