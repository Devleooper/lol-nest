import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { RIOT_API_KEY, RIOT_API_URL } from '../constants/env.constants';
import { ApiProvider } from './api-provider';

class ConfigServiceMock {
  public get<T = any>(value: string) {
    if (value === RIOT_API_KEY) {
      return 'example-api-key';
    } else if (value === RIOT_API_URL) {
      return '{region}.lol.api.com';
    } else {
      return null;
    }
  }
}
describe('ApiProvider', () => {
  let provider: ApiProvider;
  let configService: ConfigService;
  const configServiceMock = new ConfigServiceMock();
  const configServiceSpy = jest.spyOn(configServiceMock, 'get');

  beforeEach(async () => {
    const configServiceProvider = {
      provide: ConfigService,
      useValue: configServiceMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [ApiProvider, configServiceProvider],
    }).compile();

    provider = module.get<ApiProvider>(ApiProvider);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('should get configuration values on service instantiation', () => {
    expect(configServiceSpy).toHaveBeenCalledTimes(2);

    expect(configServiceSpy).toHaveBeenCalledWith(RIOT_API_KEY);
    expect(configServiceSpy).toHaveBeenCalledWith(RIOT_API_URL);
  });

  it('should get expected values from service', () => {
    expect(provider.getUrl()).toEqual(configServiceMock.get(RIOT_API_URL));
    expect(provider.getAuthHeaders()).toEqual({
      'X-Riot-Token': configServiceMock.get(RIOT_API_KEY),
    });
  });

  afterEach(() => {
    configServiceSpy.mockClear();
  });
});
