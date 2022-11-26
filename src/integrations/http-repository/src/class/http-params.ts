import { HttpMethod } from '../enums/http.methods.enum';
import { IHttpOptions } from '../interfaces/http.interface';
import { AxiosRequestHeaders } from 'axios';
import { HttpRepositorymessagesKey } from '../enums/http-repository-messages.keys';

export class HttpParams {
  method: HttpMethod;
  baseUrl: string;
  path: string;
  body: object;
  headers: AxiosRequestHeaders;
  queries: object;

  constructor(method: HttpMethod, path: string, options?: IHttpOptions) {
    this.method = method;
    this.path = path;
    this.baseUrl = options?.baseUrl;
    this.body = options?.body;
    this.headers = options?.headers;
    this.queries = options?.query;
    this.validateOptions(this);
  }

  getUri(): string {
    if (!this.queries) return this.baseUrl + this.path;
    return this.baseUrl + this.path + this.getQueryString();
  }

  getQueryString = (): string => {
    let queryString = '?';

    for (const [key, value] of Object.entries(this.queries)) {
      queryString += key + '=' + value + '&';
    }

    return queryString;
  };

  getHeaders = (): AxiosRequestHeaders => this.headers;

  getBody = (): object => this.body ?? {};

  private validateOptions = (params: Partial<HttpParams>) => {
    if (!params.baseUrl) throw new Error(HttpRepositorymessagesKey.BASE_URL_REQUIRED);
    if (!params.method) throw new Error(HttpRepositorymessagesKey.METHOD_REQUIRED);
  };
}
