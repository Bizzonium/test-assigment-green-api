import { Controller, Get, Logger } from '@nestjs/common';
import { BusinessService } from './business.service';
import { Observable, tap, timeout } from 'rxjs';

@Controller('')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  private readonly logger = new Logger(BusinessService.name);

  @Get('ping')
  getPing(): Observable<any> {
    const result = this.businessService.getPing();

    return result.pipe(
      timeout(10000),
      tap((data) => {
        this.logger.log(`Received pong response`);
        this.logger.debug(`Recieved Payload: ${JSON.stringify(data)}`);
      }),
    );
  }
}
