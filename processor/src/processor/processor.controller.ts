import { Controller, Get, Inject } from '@nestjs/common';
import { ProcessorService } from './processor.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('business')
export class ProcessorController {
  constructor(
    private readonly businessService: ProcessorService,
    @Inject('PROCESSOR_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get('hello')
  getHello(): string {
    return 'Hello World!';
  }
}
