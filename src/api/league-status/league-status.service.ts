import { Injectable } from '@nestjs/common';
import { PlatformData } from 'src/common/types';
import { ApiClient } from '../client/api-client';
import { LOL_STATUS } from './routes';

@Injectable()
export class LeagueStatusService {

    constructor(private readonly client: ApiClient) { }

    public getPLatformStatus(region: string): Promise<PlatformData> {
        return this.client.executeGet<PlatformData>(region, LOL_STATUS);
    }
}
