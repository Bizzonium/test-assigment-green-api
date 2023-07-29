import { Injectable, Logger } from '@nestjs/common';
import { GetPongDto, GetPongResponse } from './dto/get-pong.dto';
import { sleep } from 'src/utils';

@Injectable()
export class ProcessorService {
  private readonly logger = new Logger(ProcessorService.name);

  public async getPong(getPongDto: GetPongDto): Promise<GetPongResponse> {
    const { data, context } = getPongDto;
    this.logger.log(`Received ping task`);
    this.logger.debug(`Received Payload: ${JSON.stringify(data)}`);
    // this.logger.debug(`Context: ${JSON.stringify(context)}`);

    await sleep(3000);

    const responseTime = new Date();
    const result = {
      datetimes: {
        request: data.datetimes.request,
        response: responseTime,
        deltaMs: responseTime.getTime() - new Date(data.datetimes.request).getTime(),
      },
    };
    this.logger.debug(`Result: ${JSON.stringify(result)}`);
    return result;
  }
}
