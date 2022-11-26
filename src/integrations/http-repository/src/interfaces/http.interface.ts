import { AxiosRequestHeaders, AxiosResponse } from 'axios';

export interface IHttpOptionsRepository {
  baseUrl: string;
  body?: object;
  headers?: AxiosRequestHeaders;
  query?: object;
}

export interface IHttpOptions {
  baseUrl?: string;
  body?: object;
  headers?: AxiosRequestHeaders;
  query?: object;
}

export interface HandleErrorAxios {
  (error: AxiosResponse): any;
}
