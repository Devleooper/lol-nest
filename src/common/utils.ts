import { ApiException } from './types';

/**
 * Maps an axios http response error to an ApiException object
 * @param error - the axios error
 * @returns an ApiException with the detail of the http call error
 */
export const mapToApiException = (error: any): ApiException => {
  const errorMessage = error.message;
  const httpResponseStatus = error.response.status;
  const responseBody = error.response.data;

  return {
    status: httpResponseStatus,
    message: errorMessage,
    errorBody: responseBody,
  };
};

/**
 * Verifies if an object has the ApiException contract
 * @param object - the input object
 * @returns a boolean flag indicating if the object is an ApiException
 */
export const isApiException = (object: any): object is ApiException =>
  'status' in object && 'errorBody' in object;
