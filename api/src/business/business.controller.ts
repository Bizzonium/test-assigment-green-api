import { Controller, Get, Logger, RequestTimeoutException } from '@nestjs/common';
import { BusinessService } from './business.service';
import { Observable, TimeoutError, catchError, tap, throwError, timeout } from 'rxjs';

@Controller('')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  private readonly logger = new Logger(BusinessService.name);

  @Get('ping')
  getPing(): Observable<any> {
    const result = this.businessService.getPing();

    return result.pipe(
      timeout(10000),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException());
        }
        return throwError(() => err);
      }),
      tap((data) => {
        this.logger.log(`Received pong response`);
        this.logger.debug(`Recieved Payload: ${JSON.stringify(data)}`);
      }),
    );
  }
}
