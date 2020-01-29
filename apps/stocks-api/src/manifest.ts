const stockPriceRoutesPlugin = require('../src/app/plugin/stock-routes');
const stockPriceCachePlugin = require('../src/app/plugin/cache');

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