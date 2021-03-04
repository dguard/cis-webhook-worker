import { Inject } from '@nestjs/common';
import { Console, Command } from 'nestjs-console';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

import { SendExchangeRateWorkerService } from './send-exchange-rate-worker.service';

@Console()
export class SendExchangeRateService {
  constructor(
    private readonly sendExchangeRateWorkerService: SendExchangeRateWorkerService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @Command({
    command: 'send-exchange-rate',
    description:
      'Updates exchange rate',
  })
  async sendExchangeRate(): Promise<void> {
      await this.sendExchangeRateWorkerService.startSendExchangeRate(SendExchangeRateWorkerService.PROCESS_QUEUE_NO_TIMEOUT)
  }
}
