import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return { api: 'api_nutriologia 1.0.0', status: 'ok' };
  }
}
