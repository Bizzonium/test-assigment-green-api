import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class BusinessService {
  constructor(@Inject('API_SERVICE') private readonly client: ClientProxy) {}

  private readonly logger = new Logger(BusinessService.name);

  public getPing(): Observable<any> {
    const payload = {
      datetimes: {
        request: new Date(),
      },
    };
    this.logger.log(`Send ping task to processor`);
    this.logger.debug(`Sended Payload: ${JSON.stringify(payload)}`);
    return this.client.send('ping', payload);
  }
}
