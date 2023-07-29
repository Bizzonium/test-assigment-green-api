import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { amqpClientOptions } from '../amqp/amqp-client.options';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'API_SERVICE',
        transport: Transport.RMQ,
        options: { ...amqpClientOptions },
      },
    ]),
  ],
  controllers: [BusinessController],
  providers: [BusinessService],
})
export class BusinessModule {}
