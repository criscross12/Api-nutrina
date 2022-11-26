import { HttpParams } from './http-params';
import axios, { AxiosResponse } from 'axios';
import { HttpMethod } from '../enums/http.methods.enum';
import { HttpRepositorymessagesKey } from '../enums/http-repository-messages.keys';
import { HandleErrorAxios } from '../interfaces/http.interface';
import { Logger } from '@nestjs/common';

export class HttpRequest {
  params: HttpParams;

  constructor(params: HttpParams) {
    this.params = params;
  }

  execute = async (handleError?: HandleErrorAxios): Promise<Response> => {
    try {
      const response = await new HttpRequest(this.params).executeMethod();

      return this.handleResponse(response, handleError);
    } catch (error) {
      return this.handleResponse(error, handleError);
    }
  };

  executeMethod = async (): Promise<AxiosResponse<any, any>> => {
    switch (this.params.method) {
      case HttpMethod.get:
        return this.get();
      case HttpMethod.post:
        return this.post();
      case HttpMethod.put:
        return this.put();
      case HttpMethod.delete:
        return this.delete();
      default:
        return this.get();
    }
  };

  get = async (): Promise<AxiosResponse<any, any>> =>
    axios.get(this.params.getUri(), { headers: this.params.getHeaders() });

  post = async (): Promise<AxiosResponse<any, any>> =>
    axios.post(this.params.getUri(), this.params.getBody(), {
      headers: this.params.getHeaders(),
    });

  put = async (): Promise<AxiosResponse<any, any>> =>
    axios.put(this.params.getUri(), this.params.getBody(), {
      headers: this.params.getHeaders(),
    });

  delete = async (): Promise<AxiosResponse<any, any>> =>
    axios.delete(this.params.getUri(), { headers: this.params.getHeaders() });

  private handleResponse = (
    response: AxiosResponse,
    handleError: HandleErrorAxios,
  ): Promise<Response> => {
    const { status } = response;
    if (status >= 200 && status < 300) return response.data;
    if (response['response']) {
      this.showMessageLogs(response['response']);
      if (handleError) {
        return handleError(response);
      }
      throw new Error(HttpRepositorymessagesKey.REQUEST_FAIL);
    }
    this.showMessageLogsNotFound(response);
    throw new Error(HttpRepositorymessagesKey.REQUEST_FAIL);
  };

  private showMessageLogs = (response) => {
    const { status, config, data } = response;
    Logger.error('Request Url: ' + config.method + ' => ' + config.url);
    Logger.log('Request Status: ' + status);
    Logger.log('Request Heders: ');
    console.dir(config.headers as object, { depth: 10 });
    try {
      Logger.log('Request Body: ');
      console.dir(JSON.parse(config.data), { depth: 10 });
    } catch (error) {}

    Logger.log('Request Response: ');
    console.dir(data as object, { depth: 10 });
  };

  private showMessageLogsNotFound = (response) => {
    console.log(response);
    
    const { config } = response;
    Logger.error('Request Url: ' + config.method + ' => ' + config.url);
    Logger.log('Request Status: ' + 404);
    Logger.log('Request Heders: ');
    console.dir(config.headers as object, { depth: 10 });
    Logger.log('Request Body: ');
    console.dir(JSON.parse(config.data), { depth: 10 });
  };
}
