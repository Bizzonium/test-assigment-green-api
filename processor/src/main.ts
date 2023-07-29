import { NestFactory } from '@nestjs/core';
import { LogLevel, ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { amqpClientOptions } from './amqp/amqp-client.options';

async function bootstrap() {
  const isDev: boolean = process.env.NODE_ENV == 'development';

  const logger: LogLevel[] = [];
  if (isDev) {
    logger.push('log', 'error', 'warn', 'verbose', 'debug');
  } else {
    logger.push('log', 'error', 'warn');
  }

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: { ...amqpClientOptions },
    logger,
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen();
}

bootstrap();
