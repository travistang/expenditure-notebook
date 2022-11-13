import { Currency, CurrencyConfigType } from "../backend/types";

export const isCurrencyConfigValid = (config?: CurrencyConfigType) => {
  if (!config) return true;
  return !(
    [0, 1].includes(config.exchangeRate) && config?.currency !== Currency.EUR
  );
};
