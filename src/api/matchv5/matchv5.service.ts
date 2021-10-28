import { Injectable } from '@nestjs/common';
import { ContinentalRegion } from '../../common/enums';
import { Match, Record, MatchTimeline } from '../../common/types';
import { ApiClient } from '../client/api-client';
import {
  MATCHES_BY_PUUID,
  MATCH_BY_ID,
  MATCH_TIMELINE_BY_MATCH_ID,
} from './routes';

@Injectable()
export class MatchV5Service {
  constructor(private readonly client: ApiClient) {}

  /**
   * Get a list of matchId's by a user puuid
   * @param region the continental-region to execute the call
   * @param puuid  the puuid of the user
   * @param start the start index of the pagination , the default value is 0
   * @param count count of match ids from the start , the default value is 20
   * @returns a list of string match ids
   */
  public getMatchesByPuuid(
    region: ContinentalRegion,
    puuid: string,
    start: number | 0,
    count: number | 20,
  ): Promise<string[]> {
    return this.client.executeGet<string[]>(
      region,
      MATCHES_BY_PUUID,
      [{ key: 'puuid', value: puuid }],
      [
        { key: 'start', value: start },
        { key: 'count', value: count },
      ],
    );
  }

  /**
   * Gets a Match by it's id
   * @param region - the continental-region to execute the call
   * @param matchId -  the id of the match
   * @returns a Record object with metadata/match information
   */
  public getMatchById(
    region: ContinentalRegion,
    matchId: string,
  ): Promise<Record<Match>> {
    return this.client.executeGet<Record<Match>>(region, MATCH_BY_ID, [
      { key: 'matchId', value: matchId.toString() },
    ]);
  }

  /**
   *  Gets a Match timeline by it's id
   * @param region - the region to execute the call
   * @param matchId -  the id Fof the match
   * @returns  a Record object with metadata/match-timeline information
   */
  public getMatchTimeline(
    region: ContinentalRegion,
    matchId: string,
  ): Promise<Record<MatchTimeline>> {
    return this.client.executeGet<Record<MatchTimeline>>(
      region,
      MATCH_TIMELINE_BY_MATCH_ID,
      [{ key: 'matchId', value: matchId.toString() }],
    );
  }
}
