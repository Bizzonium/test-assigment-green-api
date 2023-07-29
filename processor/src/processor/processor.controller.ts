import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { ProcessorService } from './processor.service';
import { GetPongResponse } from './dto/get-pong.dto';

@Controller('business')
export class ProcessorController {
  constructor(private readonly processorService: ProcessorService) {}

  @MessagePattern('ping')
  async getPong(@Payload() data: any, @Ctx() context: RmqContext): Promise<GetPongResponse> {
    return await this.processorService.getPong({ data, context });
  }
}
