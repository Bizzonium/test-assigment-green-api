import { Module } from '@nestjs/common';
import { ProcessorService } from './processor.service';
import { ProcessorController } from './processor.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { amqpClientOptions } from '../amqp/amqp-client.options';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PROCESSOR_SERVICE',
        transport: Transport.RMQ,
        options: { ...amqpClientOptions },
      },
    ]),
  ],
  controllers: [ProcessorController],
  providers: [ProcessorService],
})
export class ProcessorModule {}
