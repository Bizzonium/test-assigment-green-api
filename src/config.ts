import { configService } from 'nest-shared';

export const PORT: number = configService.getPort() || 3000;
