import { PriceQueryResponse, PriceQuery } from './price-query.type';
import { map, pick } from 'lodash-es';
import { parse } from 'date-fns';

export function transformPriceQueryResponse(
  response: PriceQueryResponse[]
): PriceQuery[] {
  return map(
    response,
    responseItem =>
      ({
        ...pick(responseItem, [
          'date',
          'open',
          'high',
          'low',
          'close',
          'volume',
          'change',
          'changePercent',
          'label',
          'changeOverTime'
        ]),
        dateNumeric: parse(responseItem.date).getTime()
      } as PriceQuery)
  );
}

export function transformPriceQueryResponseForCustomDates(
  response: PriceQueryResponse[],
  fromDate: string,
  toDate: string
): PriceQuery[] {
  const parsedFromDate = parse(fromDate).getTime();
  const parsedToDate = parse(toDate).getTime();
  return response.filter(item => {
      const parsedDate = parse(item.date).getTime();
      return parsedDate > parsedFromDate && parsedDate < parsedToDate;
    }).map(responseItem =>
        ({
          ...pick(responseItem, [
            'date',
            'open',
            'high',
            'low',
            'close',
            'volume',
            'change',
            'changePercent',
            'label',
            'changeOverTime'
          ]),
          dateNumeric: parse(responseItem.date).getTime()
        } as PriceQuery));
}
