import { Injectable } from '@nestjs/common';
import { ContinentalRegion } from 'src/common/enums';
import { Match, MatchTimeline } from '../../common/types';
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
   * @param puuid  . the puuid of the user
   * @returns a list of strings match id's
   */
  public getMatchesByPuuid(
    region: ContinentalRegion,
    puuid: string,
  ): Promise<string[]> {
    return this.client.executeGet<string[]>(region, MATCHES_BY_PUUID, [
      { key: 'puuid', value: puuid },
    ]);
  }

  /**
   * Gets a Match by it's id
   * @param region - the continental-region to execute the call
   * @param matchId -  the id of the match
   * @returns a Match object with all the match information
   */
  public getMatchById(
    region: ContinentalRegion,
    matchId: string,
  ): Promise<Match> {
    return this.client.executeGet<Match>(region, MATCH_BY_ID, [
      { key: 'matchId', value: matchId.toString() },
    ]);
  }

  /**
   *  Gets a Match timeline by it's id
   * @param region - the region to execute the call
   * @param matchId -  the id Fof the match
   * @returns a MatchTimeline object with all the events that happened on the match
   */
  public getMatchTimeline(
    region: ContinentalRegion,
    matchId: string,
  ): Promise<MatchTimeline> {
    return this.client.executeGet<MatchTimeline>(
      region,
      MATCH_TIMELINE_BY_MATCH_ID,
      [{ key: 'matchId', value: matchId.toString() }],
    );
  }
}
