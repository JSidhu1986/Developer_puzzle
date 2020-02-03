import { environment } from '../../environments/environment';

const Wreck = require('@hapi/wreck');

export const getStockPrice =  function (symbol, period) {
 
    const baseUrl = `${environment.apiURL}/beta/stock/${symbol}/chart/${period}?token=${environment.apiKey}`;
    const option = { json: true };
    return Wreck.get(baseUrl, option)
      .then((res) => {
        console.log(res.payload);
        return res.payload;
      })
      .catch(err => console.error('Get Stock Price API call failed', err));
  };