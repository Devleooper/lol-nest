import { Injectable } from '@nestjs/common';
import { PlatformData } from './../../common/types';
import { ApiClient } from '../client/api-client';
import { LOL_STATUS } from './routes';
import { Region } from './../../common/enums';

@Injectable()
export class LeagueStatusService {
  constructor(private readonly client: ApiClient) {}

  /**
   * Get the Riot Platform status for a given region
   * @param region - the region to execute the call
   * @returns a PlatformData object indicating the status of the region servers
   */
  public getPLatformStatus(region: Region): Promise<PlatformData> {
    return this.client.executeGet<PlatformData>(region, LOL_STATUS);
  }
}
