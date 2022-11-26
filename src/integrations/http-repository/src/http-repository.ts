import { HttpParams } from './class/http-params';
import { HttpRequest } from './class/http-request';
import { HttpMethod } from './enums/http.methods.enum';
import {
  HandleErrorAxios,
  IHttpOptions,
  IHttpOptionsRepository,
} from './interfaces/http.interface';

export class HttpRepository {
  private options: IHttpOptionsRepository;

  constructor(params: IHttpOptionsRepository) {
    this.options = params;
  }

  request = (
    method: HttpMethod,
    path: string,
    options?: IHttpOptions,
    handleError?: HandleErrorAxios,
  ) => {
    const params = new HttpParams(method, path, {
      baseUrl: options?.baseUrl || this.options.baseUrl,
      body: options?.body || this.options.body,
      headers: { ...options?.headers, ...this.options.headers },
      query: options?.query || this.options.query,
    });
    return new HttpRequest(params).execute(handleError);
  };
}
