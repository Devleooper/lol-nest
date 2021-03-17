import { HttpModule, Module } from '@nestjs/common';
import { SummonerService } from './summoner/summoner.service';
import { ApiProvider } from './api-provider';
import { ApiClient } from './client/api-client';
import { MasteryService } from './mastery/mastery.service';
import { ChampionService } from './champion/champion.service';
import { ClashService } from './clash/clash.service';
import { LeagueService } from './league/league.service';
import { LeagueStatusService } from './league-status/league-status.service';
import { MatchService } from './match/match.service';
import { SpectatorService } from './spectator/spectator.service';
import { TournamentService } from './tournament/tournament.service';

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
        MatchService,
        SpectatorService,
        TournamentService
    ],
    exports: [
        SummonerService,
        MasteryService,
        ChampionService,
        ClashService,
        LeagueService,
        LeagueStatusService,
        MatchService,
        SpectatorService,
        TournamentService
    ]
})
export class ApiModule { }
