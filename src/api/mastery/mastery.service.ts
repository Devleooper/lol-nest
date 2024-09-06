import { Injectable } from '@nestjs/common';
import { ChampionMastery } from './../../common/types';
import { ApiClient } from '../client/api-client';
import {
  MASTERY_BY_ENCRYPTED_PUUID,
  MASTERY_BY_ENCRYPTED_PUUID_AND_CHAMPION_ID,
  MASTERY_SCORE_BY_ENCRYPTED_PUUID,
  MASTERY_TOP_BY_ENCRYPTED_PUUID,
} from './routes';
import { Region } from './../../common/enums';

@Injectable()
export class MasteryService {
  constructor(private readonly client: ApiClient) {}

  /**
   * Gets all champion mastery entries for an specific player
   * @param region - the region to execute the call
   * @param encryptedPuuid - the encryptedPUUID of the player
   * @returns a list of ChampionMastery objects , sorted by mumber of champion points descending
   */
  public getChampionMasteriesByEncryptedSummonerId(
    region: Region,
    encryptedPuuid: string,
  ): Promise<ChampionMastery[]> {
    return this.client.executeGet<ChampionMastery[]>(
      region,
      MASTERY_BY_ENCRYPTED_PUUID,
      [{ key: 'encryptedPUUID', value: encryptedPuuid }],
    );
  }

  /**
   * Gets a mastery for a specific champion in a specific player
   * @param region - the region to execute the call
   * @param encryptedPuuid - the encryptedPUUID of the player
   * @param championId - the championId
   * @returns a ChampionMastery object with the detail of the mastery.
   */
  public getChampionMastery(
    region: Region,
    encryptedPuuid: string,
    championId: string,
  ): Promise<ChampionMastery> {
    return this.client.executeGet<ChampionMastery>(
      region,
      MASTERY_BY_ENCRYPTED_PUUID_AND_CHAMPION_ID,
      [
        { key: 'encryptedPUUID', value: encryptedPuuid },
        { key: 'championId', value: championId },
      ],
    );
  }

  public getTopMasteries(
    region: Region,
    encryptedPuuid: string,
    count: number) : Promise<ChampionMastery[]> {
      return this.client.executeGet<ChampionMastery[]>(
        region,
        MASTERY_TOP_BY_ENCRYPTED_PUUID,
        [{ key: 'encryptedPUUID', value: encryptedPuuid }],
        [{ key: 'count', value: count.toString() }]
      );
    }

  /**
   * Gets the mastery score of a player
   * @param region - the region to execute the call
   * @param encryptedPuuid - the encryptedPUUID of the player
   * @returns a number with the mastery score
   */
  public getMasteryScore(
    region: Region,
    encryptedPuuid: string,
  ): Promise<number> {
    return this.client.executeGet<number>(
      region,
      MASTERY_SCORE_BY_ENCRYPTED_PUUID,
      [{ key: 'encryptedPUUID', value: encryptedPuuid }],
    );
  }
}
