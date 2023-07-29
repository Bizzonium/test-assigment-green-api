import { configService } from 'nest-shared';

export const PORT: number = configService.getPort() || 3000;
export const HOST: string = configService.getValue<string>('HOST', false) || '0.0.0.0';
