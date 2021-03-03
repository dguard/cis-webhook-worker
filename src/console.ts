import { BootstrapConsole } from 'nestjs-console';
import { SendExchangeRateModule } from './send-exchange-rate';

require('dotenv').config();

process.on('unhandledRejection', (err) => {
  throw err;
});

const bootstrap = new BootstrapConsole({
  module: SendExchangeRateModule,
  useDecorators: true,
});
bootstrap.init().then(async (app) => {
  try {
    await app.init();

    await bootstrap.boot();
    // process.exit(0);
  } catch (e) {
    process.exit(1);
  }
});
