import { Injectable } from '@nestjs/common';
import { KeyValue, Match, MatchList, MatchTimeline } from '../../common/types';
import { ApiClient } from '../client/api-client';
import {
  MATCHES_BY_ENCRYPTED_ACCOUNT_ID,
  MATCHES_BY_TOURNAMENT_CODE,
  MATCH_BY_ID,
  MATCH_BY_MATCH_ID_AND_TOURNAMENT_CODE,
  MATCH_TIMELINE_BY_MATCH_ID,
} from './routes';
import { Region } from '../../common/enums';

@Injectable()
export class MatchV4Service {
  constructor(private readonly client: ApiClient) {}

  /**
   * Gets a Match by it's id
   * @param region - the region to execute the call
   * @param matchId -  the id of the match
   * @returns a Match object with all the match information
   */
  public getMatchById(region: Region, matchId: number): Promise<Match> {
    return this.client.executeGet<Match>(region, MATCH_BY_ID, [
      { key: 'matchId', value: matchId.toString() },
    ]);
  }

  /**
   *
   * @param region  - the region to execute the call
   * @param encryptedAccountId - the encryptedAccountId n of the summoner
   * @param queries - some custom queries you can send , like the following :
   *  - champion -> a championId to filter on
   *  - queue -> a queueType to filter on
   *  - endTime -> a timestamp to filter on
   *  - beginTime ->  a timestamp to filter on
   *  - endIndex -> the endIndex for the Matches list (default 100)
   *  - beginIndex ->  the beginIndex for the Matches list (default 0)
   * @returns a MatchList object with the summoner last matches
   */
  public getMatchListHistory(
    region: Region,
    encryptedAccountId: string,
    queries: KeyValue[],
  ): Promise<MatchList> {
    return this.client.executeGet<MatchList>(
      region,
      MATCHES_BY_ENCRYPTED_ACCOUNT_ID,
      [{ key: 'encryptedAccountId', value: encryptedAccountId }],
      queries,
    );
  }

  /**
   *  Gets a Match timeline by it's id
   * @param region - the region to execute the call
   * @param matchId -  the id of the match
   * @returns a MatchTimeline object with all the events that happened on the match
   */
  public getMatchTimeline(
    region: Region,
    matchId: number,
  ): Promise<MatchTimeline> {
    return this.client.executeGet<MatchTimeline>(
      region,
      MATCH_TIMELINE_BY_MATCH_ID,
      [{ key: 'matchId', value: matchId.toString() }],
    );
  }

  /**
   * Gets a list of matchIds by a tournament code
   * @param region - the region to execute the call
   * @param tournamentCode -  the tournamentCode
   * @returns a List of MatchIds
   */
  public getMatchIdsByTournamentCode(
    region: Region,
    tournamentCode: string,
  ): Promise<number[]> {
    return this.client.executeGet<number[]>(
      region,
      MATCHES_BY_TOURNAMENT_CODE,
      [{ key: 'tournamentCode', value: tournamentCode }],
    );
  }

  /**
   * Get an specific match by a tournament code and match id
   * @param region - the region to execute the call
   * @param tournamentCode . the tournamentCode
   * @param matchId -  the id of the match
   * @returns a Match object with all the match details
   */
  public getMatchByIdAndTournamentCode(
    region: Region,
    tournamentCode: string,
    matchId: number,
  ): Promise<Match> {
    return this.client.executeGet<Match>(
      region,
      MATCH_BY_MATCH_ID_AND_TOURNAMENT_CODE,
      [
        { key: 'matchId', value: matchId.toString() },
        { key: 'tournamentCode', value: tournamentCode },
      ],
    );
  }
}
