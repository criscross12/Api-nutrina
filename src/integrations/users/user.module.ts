import { Module } from '@nestjs/common';
import { Helpers } from '../../shared/utils/helpers';
import { UsersService } from './application/services/users.services';

@Module({
  providers: [Helpers, UsersService],
  exports: [UsersService],
})
export class UserModule {}
