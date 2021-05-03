import { Test, TestingModule } from '@nestjs/testing';
import { ApiClient } from '../client/api-client';
import { LeagueService } from './league.service';
import { ApiClientMock } from '../../test/common-mocks';
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
