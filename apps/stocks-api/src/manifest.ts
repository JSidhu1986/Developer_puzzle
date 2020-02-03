import { stockPriceRoutesPlugin } from './app/plugin/stock-routes';
import { stockPriceCachePlugin } from './app/plugin/cache';

export const manifest = {
    server: {
        port: 3333,
        host: 'localhost'
    },
    register: {
        plugins: [
            {
                plugin: stockPriceRoutesPlugin,
            },
            {
                plugin: stockPriceCachePlugin,
            }
        ]
    }
}; 