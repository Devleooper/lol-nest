import { Test, TestingModule } from '@nestjs/testing';
import { LeagueStatusService } from './league-status.service';

describe('LeagueStatusService', () => {
  let service: LeagueStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeagueStatusService],
    }).compile();

    service = module.get<LeagueStatusService>(LeagueStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
