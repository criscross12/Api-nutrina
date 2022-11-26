import { Module } from '@nestjs/common';
import { AuthRepository } from './repositories/auth.repository';
import { AuthService } from './services/auth.service';

@Module({
  providers: [AuthService, AuthRepository],
  exports: [AuthService, AuthRepository],
})
export class AuthModule {}
