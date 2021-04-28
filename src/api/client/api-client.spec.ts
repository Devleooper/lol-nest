import { HttpModule, HttpService } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiProvider } from '../api-provider';
import { ApiClient } from './api-client';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';
import { Summoner } from './../../common/types';
import { Region } from './../../common/enums';
import { delay } from 'rxjs/operators';

class ApiProviderMock {
  public getUrl(): string {
    return '{region}.league.api.com';
  }

  public getAuthHeaders(): any {
    return {
      'X-Riot-Token': 'fake_api_key',
    };
  }
}

describe('ApiClient', () => {
  let provider: ApiClient;
  let mockHttp: HttpService;
  let apiClientProvider: ApiProvider;

  beforeEach(async () => {
    const apiProvider = {
      provide: ApiProvider,
      useClass: ApiProviderMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [ApiClient, apiProvider],
    }).compile();

    provider = module.get<ApiClient>(ApiClient);
    mockHttp = module.get<HttpService>(HttpService);
    apiClientProvider = module.get<ApiProvider>(ApiProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('should call an http service successfully', async () => {
    const httpResponse: AxiosResponse = {
      data: {
        id: '12345',
        accountId: '45678',
        puuid: '1234-5678',
        name: 'Ste nene',
        profileIconId: 63,
        summonerLevel: 232,
      },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    const httpSpy = jest
      .spyOn(mockHttp, 'get')
      .mockImplementationOnce(() => of(httpResponse).pipe(delay(2000)));

    const urlSpy = jest.spyOn(apiClientProvider, 'getUrl');
    const headersSpy = jest.spyOn(apiClientProvider, 'getAuthHeaders');

    const result = await provider.executeGet<Summoner>(
      Region.LAN,
      '/summoner/{summonerName}',
      [{ key: 'summonerName', value: 'Ste nene' }],
    );

    expect(result).toEqual(httpResponse.data);
    expect(httpSpy).toHaveBeenCalledTimes(1);
    expect(urlSpy).toHaveBeenCalledTimes(1);
    expect(headersSpy).toHaveBeenCalledTimes(1);
  });
});
