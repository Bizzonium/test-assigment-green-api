import { configService } from 'nest-shared';

export const PORT: number = configService.getPort() || 3000;
export const HOST: string = configService.getValue<string>('HOST', false) || '0.0.0.0';
export const AMQP_URL: string = configService.getValue<string>('AMQP_URL', true);
export const AMQP_QUEUE: string = configService.getValue<string>('AMQP_QUEUE', false);
