import { ApiClient } from '../api/client/api-client';
import { mocks } from './api-mocks';

export const testApiCall = async (
  location: string,
  apiClient: ApiClient,
  serviceCallFunction: () => Promise<any>,
) => {
    jest.useFakeTimers();

  const apiClientSpy = jest
    .spyOn(apiClient, 'executeGet')
    .mockImplementationOnce(
      () => new Promise((resolve) => setTimeout(() => resolve(mocks[location]) , 2000)),
    );

  const result = await serviceCallFunction();

  expect(apiClientSpy).toHaveBeenCalledTimes(1);
  expect(result).toBe(mocks[location]);
};
