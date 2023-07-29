import { AMQP_URL, AMQP_QUEUE } from '../config';

export const amqpClientOptions = {
  urls: [AMQP_URL],
  queue: AMQP_QUEUE,
  queueOptions: {
    durable: false,
  },
};
