import { Test, TestingModule } from '@nestjs/testing';
import { ApiClient } from './api-client';

describe('ApiClient', () => {
  let provider: ApiClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiClient],
    }).compile();

    provider = module.get<ApiClient>(ApiClient);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
