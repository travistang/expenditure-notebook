import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { Currency, Expenditure } from '../../../backend/types';

type Props = {
  amount: number;
  currencyConfig?: Expenditure['currencyConfig'];
}
export default function ValueInfo({ amount, currencyConfig } :Props) {
  return (
    <div className="flex flex-col items-end justify-center">
      <span className="text-4xl font-bold">{amount.toFixed(2)}€</span>
      {currencyConfig && currencyConfig.currency !== Currency.EUR && (
        <span className="text-font text-opacity-70">({(currencyConfig.exchangeRate * amount).toFixed(2)} {getSymbolFromCurrency(currencyConfig.currency)} )</span>
      )}
    </div>
  )
}