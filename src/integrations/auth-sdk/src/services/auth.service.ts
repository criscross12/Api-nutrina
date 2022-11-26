import { Injectable } from '@nestjs/common';
import { HandleErrorAxios } from '../../../http-repository/src';
import { IAccessAccountsRequest } from '../interfaces/access-accounts-request.interface';
import { IAccessRequest } from '../interfaces/access-request.interface';
import { ICreatePermission } from '../interfaces/create-permission.dto';
import { AuthRepository } from '../repositories/auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  verificAccess = async (
    bearerToken: string,
    data: IAccessRequest,
    handleError?: HandleErrorAxios,
  ) => this.authRepository.verificAccess(bearerToken, data, handleError);

  verificAccessAccount = async (
    bearerToken: string,
    data: IAccessAccountsRequest,
    handleError?: HandleErrorAxios,
  ) => this.authRepository.verificAccessAccount(bearerToken, data, handleError);

  updatePermissions = async (data: ICreatePermission, handleError?: HandleErrorAxios) =>
    this.authRepository.updatePermissions(data, handleError);
}
