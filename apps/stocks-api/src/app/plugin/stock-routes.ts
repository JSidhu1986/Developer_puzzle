export const stockPriceRoutesPlugin = {
    name: 'stock-price-routes',
    version: '1.0.0',
    register: function (server, options, next) {
        server.route({
            method: 'GET',
            path: '/beta/stock/{symbol}/chart/{period}',
            handler: async (request, reply) => {
              const symbol = request.params.symbol;
              const period = request.params.period;
              const stockPricesForPeriod = await server.methods.stockPrice(symbol, period);
              return reply.response(stockPricesForPeriod);
            }
        });
        next();
    }
};