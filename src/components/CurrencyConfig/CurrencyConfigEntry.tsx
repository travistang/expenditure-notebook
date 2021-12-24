import currencyToSymbolMap from "currency-symbol-map";
import { useState } from "react";
import { Currency, CurrencyConfigType } from "../../backend/types";
import CurrencyConfigPanel from "./CurrencyConfigPanel";

type Props = {
  amount: number;
  currencyConfig: CurrencyConfigType;
  onChangeCurrency: (changeCurrencyPayload: CurrencyConfigType) => void;
};
export default function CurrencyConfigEntry({
  amount,
  currencyConfig,
  onChangeCurrency,
}: Props) {
  const [configuringCurrency, setConfiguringCurrency] = useState(false);
  const { currency, exchangeRate } = currencyConfig;
  const foreignCurrencySymbol = currencyToSymbolMap(currency);
  return (
    <div className="w-full flex items-center justify-end mb-2">
      {currency !== Currency.EUR && (
        <div className="flex flex-col gap-1 flex-1">
          <span className="font-bold text-sm text-secondary-500">
            ≈ {(amount / 100 / exchangeRate).toFixed(2)}€
          </span>
          <span className="text-xs">
            (1€ : {exchangeRate.toFixed(2)} {foreignCurrencySymbol})
          </span>
        </div>
      )}
      <button
        onClick={() => setConfiguringCurrency(true)}
        className="rounded-full w-12 h-8 flex items-center justify-center bg-primary-500 text-primary-100"
      >
        {foreignCurrencySymbol}
      </button>
      {configuringCurrency && (
        <CurrencyConfigPanel
          onSelect={onChangeCurrency}
          onClose={() => setConfiguringCurrency(false)}
          opened={configuringCurrency}
        />
      )}
    </div>
  );
}
