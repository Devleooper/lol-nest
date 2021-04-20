import { Injectable } from '@nestjs/common';
import { ChampionInfo } from './../../common/types';
import { ApiClient } from '../client/api-client';
import { CHAMPION_ROTATIONS } from './routes';
import { Region } from './../../common/enums';

@Injectable()
export class ChampionService {
  constructor(private readonly client: ApiClient) {}

  /**
   * Gets the current champion rotations
   * @param region -  the region to execute the call
   * @returns a ChampionInfo object with all the champion rotations information (free to play and low free to play)
   */
  public getChampionRotations(region: Region): Promise<ChampionInfo> {
    return this.client.executeGet<ChampionInfo>(region, CHAMPION_ROTATIONS);
  }
}
