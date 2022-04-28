import { HttpModule, Module } from '@nestjs/common';
import { SummonerService } from './summoner/summoner.service';
import { ApiProvider } from './api-provider';
import { ApiClient } from './client/api-client';
import { MasteryService } from './mastery/mastery.service';
import { ChampionService } from './champion/champion.service';
import { ClashService } from './clash/clash.service';
import { LeagueService } from './league/league.service';
import { LeagueStatusService } from './league-status/league-status.service';
import { MatchV4Service } from './matchv4/matchv4.service';
import { MatchV5Service } from './matchv5/matchv5.service';
import { SpectatorService } from './spectator/spectator.service';

@Module({
  imports: [HttpModule],
  providers: [
    ApiProvider,
    ApiClient,
    SummonerService,
    MasteryService,
    ChampionService,
    ClashService,
    LeagueService,
    LeagueStatusService,
    MatchV4Service,
    MatchV5Service,
    SpectatorService,
  ],
  exports: [
    SummonerService,
    MasteryService,
    ChampionService,
    ClashService,
    LeagueService,
    LeagueStatusService,
    MatchV4Service,
    MatchV5Service,
    SpectatorService,
  ],
})
export class ApiModule {}
