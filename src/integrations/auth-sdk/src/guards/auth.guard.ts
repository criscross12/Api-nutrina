import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const bearerToken = request.headers['authorization'];

    if (!bearerToken) throw new UnauthorizedException();
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const permissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler(),
    );
    const res = await this.authService.verificAccess(
      bearerToken,
      {
        roles,
        permissions,
      },
      () => {
        throw new UnauthorizedException();
      },
    );

    if (!res?.access) return false;
    request.user = res;
    return true;
  }
}
