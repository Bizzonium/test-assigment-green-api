import { configService } from 'nest-shared';

export const PORT: number = configService.getPort() || 3000;
export const HOST: string = process.env.HOST || '0.0.0.0';
