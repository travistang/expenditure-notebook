import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { Currency, Expenditure } from "../../../backend/types";
import AmountInput from "../../AmountInput";

type Props = {
  amount: number;
  currencyConfig?: Expenditure["currencyConfig"];
  onChangeAmount: (amount: number) => void;
};
export default function ValueInfo({
  amount,
  onChangeAmount,
  currencyConfig,
}: Props) {
  const onChange = (amount: number | null) => {
    onChangeAmount(amount ?? 0);
  };
  return (
    <div className="flex flex-col items-end justify-center overflow-hidden">
      <AmountInput
        onChange={onChange}
        value={amount * 100}
        className="w-min"
        innerClassName="h-16 text-4xl bg-background bg-opacity-0 text-right w-min"
        maxFontSize={28}
        currency={currencyConfig?.currency ?? Currency.EUR}
        mapOutputFn={(v) => (v ? v / 100 : 0)}
      />
      {currencyConfig && currencyConfig.currency !== Currency.EUR && (
        <span className="text-font text-opacity-70">
          ({(currencyConfig.exchangeRate * amount).toFixed(2)}{" "}
          {getSymbolFromCurrency(currencyConfig.currency)} )
        </span>
      )}
    </div>
  );
}
