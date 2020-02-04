export const stockPriceRoutesPlugin = {
    name: 'stock-price-routes',
    register: function (server) {
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
    }
};