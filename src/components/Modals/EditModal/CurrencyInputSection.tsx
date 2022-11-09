import getSymbolFromCurrency from 'currency-symbol-map';
import React from 'react';
import { Currency, CurrencyConfigType } from '../../../backend/types';
import AmountInput from '../../AmountInput';
import Section from '../../Section';
import CurrencyOptionChip from './CurrencyOptionChip';

type Props = {
  currencyConfig: CurrencyConfigType;
  onChange: (newCurrencyConfig: CurrencyConfigType) => void;
}
export default function CurrencyInputSection({ currencyConfig, onChange }: Props) {
  const updateConfig = (field: keyof CurrencyConfigType) => (value: CurrencyConfigType[typeof field]) => {
    onChange({
      ...currencyConfig,
      [field]: value
    })
  };

  return (
    <Section title="Currency">
      <div className="flex gap-2 flex-col items-stretch flex-nowrap">
        <div className="grid grid-cols-2 flex-1 px-8">
          {Object.values(Currency).map((currency) => (
            <CurrencyOptionChip
              key={currency}
              currency={currency}
              onSelect={() => updateConfig('currency')(currency)}
              selected={currencyConfig?.currency === currency}
            />
          ))}
        </div>
        {currencyConfig.currency !== Currency.EUR && (
          <>
            <div className="text-xs self-end -mb-2">
              Exchange Rate (1€ : ? {getSymbolFromCurrency(currencyConfig.currency)})
            </div>
            <AmountInput
              value={currencyConfig.exchangeRate * 100}
              onChange={value => updateConfig('exchangeRate')((value ?? 0) / 100)}
              className="bg-font bg-opacity-0 text-right"
              fontSizeFn={(valueStringLength, screenWidth) => Math.min((1.5 * screenWidth) / valueStringLength, 22)}
            />
          </>
        )}
      </div>
    </Section>
  )
}