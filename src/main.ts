import { NestFactory } from '@nestjs/core';
import { LogLevel } from '@nestjs/common';
import { AppModule } from './app.module';
import { PORT } from './config';

async function bootstrap() {
  const isDev: boolean = process.env.NODE_ENV == 'development';

  const logger: LogLevel[] = [];
  if (isDev) {
    logger.push('log', 'error', 'warn', 'verbose', 'debug');
  } else {
    logger.push('log', 'error', 'warn');
  }

  const app = await NestFactory.create(AppModule, { logger });
  await app.listen(PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
