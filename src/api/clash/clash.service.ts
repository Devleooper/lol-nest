import { Injectable } from '@nestjs/common';
import { Player, Team, Tournament } from './../../common/types';
import { ApiClient } from '../client/api-client';
import {
  PLAYERS_BY_SUMMONER_ID,
  TEAM_BY_ID,
  TOURNAMENTS,
  TOURNAMENT_BY_ID,
  TOURNAMENT_BY_TEAM_ID,
} from './routes';
import { Region } from './../../common/enums';

@Injectable()
export class ClashService {
  constructor(private readonly client: ApiClient) {}

  /**
   * Gets all the players in the clash tournament
   * @param region - the region to execute the call
   * @param summonerId - the id of the summoner
   * @returns a list of Player objects in the same clash tournament
   */
  public getClashPlayersBySummonerId(
    region: Region,
    summonerId: string,
  ): Promise<Player[]> {
    return this.client.executeGet<Player[]>(region, PLAYERS_BY_SUMMONER_ID, [
      { key: 'summonerId', value: summonerId },
    ]);
  }

  /**
   * Get a team by id
   * @param region - the region to execute the call
   * @param teamId - the id of the team
   * @returns a Team object with the detail of the clash team
   */
  public getTeamById(region: Region, teamId: string): Promise<Team> {
    return this.client.executeGet<Team>(region, TEAM_BY_ID, [
      { key: 'teamId', value: teamId },
    ]);
  }

  /**
   * Gets all the next clash tournaments
   * @param region - the region to execute the call
   * @returns a list of Tournament objects with the next clash tournaments
   */
  public getTournaments(region: Region): Promise<Tournament[]> {
    return this.client.executeGet<Tournament[]>(region, TOURNAMENTS);
  }

  /**
   * Get a clash tournament by a teamId
   * @param region - the region to execute the call
   * @param teamId - the id of the clash team
   * @returns a Tournament object with the clash tournament detail
   */
  public getTournamentByTeamId(
    region: Region,
    teamId: string,
  ): Promise<Tournament> {
    return this.client.executeGet<Tournament>(region, TOURNAMENT_BY_TEAM_ID, [
      { key: 'teamId', value: teamId },
    ]);
  }

  /**
   * Get a clash tournament by id
   * @param region - the region to execute the call
   * @param tournamentId - the id of the clash tournament
   * @returns the tournament object with all the details
   */
  public getTournamentById(
    region: Region,
    tournamentId: string,
  ): Promise<Tournament> {
    return this.client.executeGet<Tournament>(region, TOURNAMENT_BY_ID, [
      { key: 'tournamentId', value: tournamentId },
    ]);
  }
}
