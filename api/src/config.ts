import { configService } from 'nest-shared';

export const PORT: number = configService.getValue<number>('PORT', false) || configService.getPort() || 3000;
export const HOST: string = configService.getValue<string>('HOST', false) || '0.0.0.0';
export const AMQP_URL: string = configService.getValue<string>('AMQP_URL', false) || 'amqp://localhost:5672';
export const AMQP_QUEUE: string = configService.getValue<string>('AMQP_QUEUE', false) || 'example_queue';
