import { HttpModule, Module } from '@nestjs/common';
import { SummonerService } from './summoner/summoner.service';
import { ApiProvider } from './api-provider';
import { ApiClient } from './client/api-client';
import { MasteryService } from './mastery/mastery.service';
import { ChampionService } from './champion/champion.service';
import { ClashService } from './clash/clash.service';
import { LeagueService } from './league/league.service';
import { LeagueStatusService } from './league-status/league-status.service';
import { MatchV5Service } from './matchv5/matchv5.service';
import { SpectatorService } from './spectator/spectator.service';
import { AccountService } from './account/account.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [
    ApiProvider,
    ApiClient,
    SummonerService,
    MasteryService,
    ChampionService,
    ClashService,
    LeagueService,
    LeagueStatusService,
    MatchV5Service,
    SpectatorService,
    AccountService,
  ],
  exports: [
    AccountService,
    SummonerService,
    MasteryService,
    ChampionService,
    ClashService,
    LeagueService,
    LeagueStatusService,
    MatchV5Service,
    SpectatorService,
  ],
})
export class RiotApiModule {}
