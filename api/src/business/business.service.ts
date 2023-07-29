import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BusinessService {
  constructor(@Inject('API_SERVICE') private readonly client: ClientProxy) {}

  public getPing(): any {
    const payload = {
      datetimes: {
        request: new Date(),
      },
    };
    return this.client.send('ping', payload);
  }
}
