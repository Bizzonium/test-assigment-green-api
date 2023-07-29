import { Controller, Get, Inject } from '@nestjs/common';
import { BusinessService } from './business.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('business')
export class BusinessController {
  constructor(
    private readonly businessService: BusinessService,
    @Inject('API_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get('hello')
  getHello(): string {
    return 'Hello World!';
  }
}
