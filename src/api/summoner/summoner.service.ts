import { Injectable } from '@nestjs/common';
import { ApiClient } from './../client/api-client';
import { Summoner } from './../../common/types';
import {
  SUMMONER_BY_ACCOUNT_ID,
  SUMMONER_BY_NAME,
  SUMMONER_BY_PUUID,
  SUMMONER_BY_ENCRYPTED_SUMMONER_ID,
} from './routes';
import { Region } from './../../common/enums';

@Injectable()
export class SummonerService {
  constructor(private readonly client: ApiClient) {}

  /**
   * retrieves the summoner by the encryptedAccountId
   * @param region - the region to execute the call
   * @param encryptedAccountId - the encrypted account id of the player
   * @returns a Summoner object
   */
  public getSummonerByEncryptedAccountId(
    region: Region,
    encryptedAccountId: string,
  ): Promise<Summoner> {
    return this.client.executeGet<Summoner>(region, SUMMONER_BY_ACCOUNT_ID, [
      { key: 'encryptedAccountId', value: encryptedAccountId },
    ]);
  }

  /**
   * retrieves the summoner by the summonerName
   * @param region - the region to execute the call
   * @param summonerName - the name of the player
   * @returns a Summoner object
   */
  public getSummonerByName(
    region: Region,
    summonerName: string,
  ): Promise<Summoner> {
    return this.client.executeGet<Summoner>(region, SUMMONER_BY_NAME, [
      { key: 'summonerName', value: summonerName },
    ]);
  }

  /**
   * retrieves the summoner by the puuid
   * @param region - the region to execute the call
   * @param puuid - the name of the player
   * @returns a Summoner object
   */
  public getSummonerByPUUID(region: Region, puuid: string): Promise<Summoner> {
    return this.client.executeGet<Summoner>(region, SUMMONER_BY_PUUID, [
      { key: 'encryptedPUUID', value: puuid },
    ]);
  }

  /**
   * retrieves the summoner by the encryptedSummonerId
   * @param region - the region to execute the call
   * @param encryptedSummonerId - the encryptedSummonerId of the player
   * @returns a Summoner object
   */
  public getSummonerByEncryptedSummonerId(
    region: Region,
    encryptedSummonerId: string,
  ): Promise<Summoner> {
    return this.client.executeGet<Summoner>(
      region,
      SUMMONER_BY_ENCRYPTED_SUMMONER_ID,
      [{ key: 'encryptedSummonerId', value: encryptedSummonerId }],
    );
  }
}
