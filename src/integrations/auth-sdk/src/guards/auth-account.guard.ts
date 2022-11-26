import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthAccountGuard implements CanActivate {
  constructor(private reflector: Reflector, private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const bearerToken = request.headers['authorization'];
    let accounts = request.headers['accounts'];
    if (!bearerToken) throw new UnauthorizedException();
    if (!accounts) throw new UnauthorizedException();

    accounts = (accounts as string).split(',');

    const permissions = this.reflector.get<string[]>('permissions', context.getHandler());
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const res = await this.authService.verificAccessAccount(
      bearerToken,
      {
        accounts,
        permissions,
        roles,
      },
      () => {
        throw new UnauthorizedException();
      },
    );

    if (!res?.access) return false;
    request.user = res;
    if (res.accounts_access?.length > 0) {
      request.user.account_uuid = res.accounts_access[0];
    }
    return true;
  }
}
