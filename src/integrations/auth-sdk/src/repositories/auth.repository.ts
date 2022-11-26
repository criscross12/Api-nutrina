import { Injectable } from '@nestjs/common';
import {
  HandleErrorAxios,
  HttpMethod,
  HttpRepository,
  IHttpOptions,
} from '../../../http-repository/src';
import { configLoader } from 'src/config/configs/env.configs';
import { IAccessAccountsRequest } from '../interfaces/access-accounts-request.interface';
import { IAccessRequest } from '../interfaces/access-request.interface';
import { IAccessResponse } from '../interfaces/access-response.interface';
import { ICreatePermission } from '../interfaces/create-permission.dto';

@Injectable()
export class AuthRepository extends HttpRepository {
  constructor() {
    super({
      baseUrl: configLoader().apis.auth_url_base,
      headers: { 'api-token': configLoader().apis.api_token },
    });
  }

  verificAccess = async (
    bearerToken: string,
    data: IAccessRequest,
    handleError?: HandleErrorAxios,
  ): Promise<IAccessResponse | any> => {
    const method = HttpMethod.post;
    const path = '/api-auth/access';
    const options: IHttpOptions = {
      body: data,
      headers: { authorization: bearerToken },
    };
    return await this.request(method, path, options, handleError);
  };

  verificAccessAccount = async (
    bearerToken: string,
    data: IAccessAccountsRequest,
    handleError?: HandleErrorAxios,
  ): Promise<IAccessResponse | any> => {
    const method = HttpMethod.post;
    const path = '/api-auth/access-accounts';
    const options: IHttpOptions = {
      body: data,
      headers: { authorization: bearerToken },
    };
    return await this.request(method, path, options, handleError);
  };

  updatePermissions = async (
    data: ICreatePermission,
    handleError?: HandleErrorAxios,
  ): Promise<IAccessResponse | any> => {
    const method = HttpMethod.post;
    const path = '/api-permissions';
    return await this.request(method, path, { body: data }, handleError);
  };
}
