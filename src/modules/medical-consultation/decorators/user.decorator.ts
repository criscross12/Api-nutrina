import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserDecorator = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();  
  const bearerToken = request.headers['authorization'];
  
  return [request.user, bearerToken];
});
