/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/
import { Server } from 'hapi';
import { stockPriceRoutesPlugin } from './app/plugin/stock-routes';
import { stockPriceCachePlugin } from './app/plugin/cache';

const server = new Server({
  port: 3333,
  host: 'localhost'
});

const start = async function () {
  try {
    await server.register([
      {
        plugin: stockPriceRoutesPlugin,
      }, 
      {
        plugin: stockPriceCachePlugin,
      }
    ]);
    await server.start();
    console.log('Server running on %s', server.info.uri);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
start();
