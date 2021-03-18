import { Injectable } from '@nestjs/common';
import { Match, MatchList, MatchTimeline } from 'src/common/types';
import { ApiClient } from '../client/api-client';
import {
    MATCHES_BY_ENCRYPTED_ACCOUNT_ID,
    MATCHES_BY_TOURNAMENT_CODE, MATCH_BY_ID,
    MATCH_BY_MATCH_ID_AND_TOURNAMENT_CODE,
    MATCH_TIMELINE_BY_MATCH_ID
} from './routes';

@Injectable()
export class MatchService {

    constructor(private readonly client: ApiClient) { }


    public getMatchById(region: string, matchId: number): Promise<Match> {
        return this.client.executeGet<Match>(region, MATCH_BY_ID,
            [{ key: 'matchId', value: matchId.toString() }]);
    }

    public getMatchListHistory(region: string, encryptedAccountId: string): Promise<MatchList> {
        return this.client.executeGet<MatchList>(region, MATCHES_BY_ENCRYPTED_ACCOUNT_ID,
            [{ key: 'encryptedAccountId', value: encryptedAccountId }]);
    }

    public getMatchTimeline(region: string, matchId: number): Promise<MatchTimeline> {
        return this.client.executeGet<MatchTimeline>(region, MATCH_TIMELINE_BY_MATCH_ID,
            [{ key: 'matchId', value: matchId.toString() }]);
    }

    public getMatchIdsByTournamentCode(region: string, tournamentCode: string): Promise<number[]> {
        return this.client.executeGet<number[]>(region, MATCHES_BY_TOURNAMENT_CODE,
            [{ key: 'tournamentCode', value: tournamentCode }]);
    }

    public getMatchByIdAndTournamentCode(region: string, tournamentCode: string, matchId: number): Promise<Match> {
        return this.client.executeGet<Match>(region, MATCH_BY_MATCH_ID_AND_TOURNAMENT_CODE,
            [{ key: 'matchId', value: matchId.toString() },
            { key: 'tournamentCode', value: tournamentCode }]);
    }
}
