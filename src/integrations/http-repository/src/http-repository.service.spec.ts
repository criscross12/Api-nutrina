import { Test, TestingModule } from '@nestjs/testing';
import { HttpRepository } from './http-repository';

describe('HttpRepositoryService', () => {
  let service: HttpRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpRepository],
    }).compile();

    service = module.get<HttpRepository>(HttpRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
