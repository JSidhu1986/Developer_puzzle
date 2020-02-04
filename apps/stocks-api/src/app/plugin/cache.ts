import { getStockPrice } from '../service/stocksPriceService';

export const stockPriceCachePlugin = {
    name: 'stock-price-cache',
    register: function (server) {
        const options = {
            cache: {
              expiresIn: 60*60*1000,
              generateTimeout: 10000
            },
            generateKey: (symbol: string, period:string) => `${symbol}-for-${period}`
          };
        server.method('stockPrice', getStockPrice, options);
    }
};