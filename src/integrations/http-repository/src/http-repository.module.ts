import { Module } from '@nestjs/common';
import { HttpRepository } from './http-repository';

@Module({
  providers: [HttpRepository],
  exports: [HttpRepository],
})
export class HttpRepositoryModule {}
