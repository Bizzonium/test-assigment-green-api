import type { RmqContext } from '@nestjs/microservices';
import { IsJSON, IsNotEmpty } from 'class-validator';

export type Datetimes = {
  request: Date;
  response: Date;
  deltaMs: number;
};

export type GetPongResponse = {
  datetimes: Datetimes;
};

export class GetPongDto {
  @IsJSON()
  @IsNotEmpty()
  data: {
    datetimes: Datetimes;
  };

  @IsNotEmpty()
  context: RmqContext;
}
