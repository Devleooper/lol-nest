import { Injectable } from '@nestjs/common';
import { ApiClient } from '../client/api-client';
import { ContinentalRegion } from 'src/common/enums';
import { Account } from 'src/common/types';
import { ACCOUNT_BY_PUUID, ACCOUNT_BY_RIOT_ID } from './routes';

@Injectable()
export class AccountService {
  constructor(private readonly client: ApiClient) {}

  /**
   *  Get an account by PUUID
   * @param region  - the region to execute the call
   * @param puuid  - the puuid of the player
   * @returns  an Account object
   */
  public getAccountByPUUID(
    region: ContinentalRegion,
    puuid: string,
  ): Promise<Account> {
    return this.client.executeGet<Account>(region, ACCOUNT_BY_PUUID, [
      { key: 'puuid', value: puuid },
    ]);
  }

  /**
   * Get an account by Riot ID
   * @param region - the region to execute the call
   * @param gameName - the game name of the player
   * @param tagLine - the tag line of the player
   * @returns an Account object
   */
  public getAccountByRiotId(
    region: ContinentalRegion,
    gameName: string,
    tagLine: string,
  ): Promise<Account> {
    return this.client.executeGet<Account>(region, ACCOUNT_BY_RIOT_ID, [
      { key: 'gameName', value: gameName },
      { key: 'tagLine', value: tagLine },
    ]);
  }
}
