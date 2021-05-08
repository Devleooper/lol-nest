import { HttpService, Injectable } from '@nestjs/common';
import { ApiException, KeyValue } from './../../common/types';
import { REGION_PLACEHOLDER } from './../../constants/http.constants';
import { ApiProvider } from '../api-provider';
import { catchError, map } from 'rxjs/operators';
import { ContinentalRegion, Region } from './../../common/enums';
import { of } from 'rxjs';
import { isApiException, mapToApiException } from '../../common/utils';

@Injectable()
export class ApiClient {
  constructor(
    private httpService: HttpService,
    private provider: ApiProvider,
  ) {}

  /**
   * Executes a GET request to the Riot Games API
   * @param  region - the region/continental-region to execute the call
   * @param location - the url path
   * @param paths path parameters of the request
   * @param queries query parameters of the request
   * @returns the response body of type <T>
   */
  public executeGet<T>(
    region: Region | ContinentalRegion,
    location: string,
    paths: KeyValue[] = [],
    queries: KeyValue[] = [],
  ): Promise<T> {
    const url = this.buildUrl(region, location, paths);

    return this.httpService
      .get<T>(url, { params: queries, headers: this.provider.getAuthHeaders() })
      .pipe(
        map((response) => response.data),
        catchError((error: any) => {
          return of(mapToApiException(error));
        }),
      )
      .toPromise()
      .then((response: T | ApiException) => {
        if (isApiException(response)) throw response;
        return response as T;
      });
  }

  /**
   *  Builds a request url
   * @param  region - the region/continental-region to execute the call
   * @param location - the url path
   * @param pathParams - path paramateres to replace
   * @returns a string url containing the base url , location and resolved path params
   */
  private buildUrl(
    region: Region | ContinentalRegion,
    location: string,
    pathParams: KeyValue[] | [],
  ): string {
    const baseUrl = this.provider
      .getUrl()
      .replace(REGION_PLACEHOLDER, region.toString());

    let finalLocation: string;

    pathParams.forEach((path: KeyValue) => {
      finalLocation = location.replace(`{${path.key}}`, path.value);
    });

    return baseUrl + finalLocation;
  }
}
