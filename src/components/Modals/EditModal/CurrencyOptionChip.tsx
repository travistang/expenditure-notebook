import classNames from 'classnames';
import getSymbolFromCurrency from 'currency-symbol-map';
import React from 'react';
import { Currency } from '../../../backend/types';

type Props = {
  currency: Currency;
  selected: boolean;
  onSelect: () => void;
};
export default function CurrencyOptionChip({ currency, selected, onSelect }: Props) {
  return (
    <div
      onClick={onSelect}
      className={classNames(
        "flex items-center gap-2 rounded-lg justify-center",
        selected && "bg-primary"
      )}>
      <span className={classNames(
        "text-2xl font-bold",
        selected && "text-background")}
      >
        {getSymbolFromCurrency(currency)}
      </span>
      <span className={classNames("font-bold", selected && "text-background")}>{currency}</span>
    </div>
  );
}