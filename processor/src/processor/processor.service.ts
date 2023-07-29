import { Injectable } from '@nestjs/common';
import { GetPongDto, GetPongResponse } from './dto/get-pong.dto';
import { sleep } from 'src/utils';

@Injectable()
export class ProcessorService {
  public async getPong(getPongDto: GetPongDto): Promise<GetPongResponse> {
    const { data } = getPongDto;
    await sleep(3000);
    const responseTime = new Date();
    return {
      datetimes: {
        request: data.datetimes.request,
        response: responseTime,
        deltaMs: responseTime.getTime() - new Date(data.datetimes.request).getTime(),
      },
    };
  }
}
