import { Test, TestingModule } from '@nestjs/testing';
import { ApiProvider } from './api-provider';

describe('ApiProvider', () => {
  let provider: ApiProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiProvider],
    }).compile();

    provider = module.get<ApiProvider>(ApiProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
