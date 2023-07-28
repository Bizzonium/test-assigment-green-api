import { NestFactory } from '@nestjs/core';
import { LogLevel, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import helmet from 'helmet';
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

  app.use(helmet());
  if (isDev) {
    console.log('Running in dev, enabled CORS');
    app.enableCors();
  }

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
