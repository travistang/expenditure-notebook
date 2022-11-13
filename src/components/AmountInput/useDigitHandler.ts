import getSymbolFromCurrency from "currency-symbol-map";
import { Currency } from "../../backend/types";

export const getValueString = (
  value: number | null,
  currency?: Currency,
  nullable?: boolean,
  mapValueFn?: (n: number | null) => number | null,
) => {
  if (nullable && value === null) {
    return "";
  }
  const currencyString = currency ? getSymbolFromCurrency(currency) : "";
  const usingValue = value ?? 0;
  const mappedValue = mapValueFn?.(usingValue) ?? usingValue;
  return `${(mappedValue / 100).toFixed(2)}${currencyString}`;
};
export const onRemoveDigit = (value: number | null, nullable?: boolean) => {
  if (nullable && !value) {
    return null;
  }

  const usingValue = value ?? 0;
  return Math.floor(usingValue / 10);
};

export const onAddDigit = (
  value: number | null,
  digit: number,
) => {
  if (value === null) return digit;
  return value * 10 + digit;
};