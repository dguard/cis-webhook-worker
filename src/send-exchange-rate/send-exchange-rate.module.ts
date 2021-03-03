import { Module } from '@nestjs/common';
import { ConsoleModule } from 'nestjs-console';
import { WinstonModule } from 'nest-winston';

import LoggerConfig from '../logger.config';
import { SendExchangeRateWorkerService } from './send-exchange-rate-worker.service';
import { SendExchangeRateService } from './send-exchange-rate.service';
import {ConfigModule} from "@nestjs/config";

const logger: LoggerConfig = new LoggerConfig();

@Module({
  imports: [
    ConsoleModule,
    WinstonModule.forRoot(logger.console()),
    ConfigModule.forRoot({}),
  ],
  providers: [SendExchangeRateService, SendExchangeRateWorkerService],
  exports: [SendExchangeRateService, SendExchangeRateWorkerService],
})
export class SendExchangeRateModule {}
