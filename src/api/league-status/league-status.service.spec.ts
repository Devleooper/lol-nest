import { Test, TestingModule } from '@nestjs/testing';
import { LeagueStatusService } from './league-status.service';
import { ApiClient } from '../client/api-client';
import { ApiClientMock } from '../../test/common-mocks';

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
