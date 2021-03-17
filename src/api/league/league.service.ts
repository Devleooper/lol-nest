import { Injectable } from '@nestjs/common';
import { QueueType, Rank, Tier } from 'src/common/enums';
import { LeagueEntry, LeagueList } from 'src/common/types';
import { ApiClient } from '../client/api-client';
import {
    CHALLENGER_LEAGUE_BY_QUEUE,
    GRANDMASTER_LEAGUE_BY_QUEUE,
    LEAGUES_BY_ENCRYPTED_SUMMONER_ID,
    LEAGUE_BY_ID, LEAGUE_ENTRIES,
    MASTER_LEAGUE_BY_QUEUE
} from './routes';

@Injectable()
export class LeagueService {

    constructor(private readonly client: ApiClient) { }


    public getChallengerLeagueByQueue(region: string, queue: QueueType): Promise<LeagueList> {
        return this.client.executeGet<LeagueList>(region, CHALLENGER_LEAGUE_BY_QUEUE,
            [{ key: 'queue', value: queue.toString() }]);
    }

    public getLeagueEntriesForForSummoner(region: string, encryptedSummonerId: string): Promise<Set<LeagueEntry>> {
        return this.client.executeGet<Set<LeagueEntry>>(region, LEAGUES_BY_ENCRYPTED_SUMMONER_ID,
            [{ key: 'encryptedSummonerId', value: encryptedSummonerId }]);
    }

    public getLeagueEntries(region: string, queue: QueueType, tier: Tier, division: Rank, page: number): Promise<Set<LeagueEntry>> {
        return this.client.executeGet<Set<LeagueEntry>>(region, LEAGUE_ENTRIES,
            [{ key: 'queue', value: queue.toString() },
            { key: 'tier', value: tier.toString() },
            { key: 'division', value: division.toString() }],
            [{ key: 'page', value: page.toString() }]);
    }

    public getGrandMasterLeagueByQueue(region: string, queue: QueueType): Promise<LeagueList> {
        return this.client.executeGet<LeagueList>(region, GRANDMASTER_LEAGUE_BY_QUEUE,
            [{ key: 'queue', value: queue.toString() }]);
    }

    public getLeagueById(region: string, leagueId: string): Promise<LeagueList> {
        return this.client.executeGet<LeagueList>(region, LEAGUE_BY_ID,
            [{ key: 'leagueId', value: leagueId }]);
    }

    public getMasterLeagueByQueue(region: string, queue: QueueType): Promise<LeagueList> {
        return this.client.executeGet<LeagueList>(region, MASTER_LEAGUE_BY_QUEUE,
            [{ key: 'queue', value: queue.toString() }]);
    }

}
