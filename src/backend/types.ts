export enum Currency {
  EUR = "EUR",
  USD = "USD",
  PLN = "PLN",
  HKD = "HKD",
}

export type CurrencyConfigType = { currency: Currency; exchangeRate: number };

export type Expenditure = {
  description: string;
  date: Date;
  amount: number;
  labels: string[];
  id: string;
  currencyConfig?: CurrencyConfigType;
};

export type Form = Omit<Expenditure, "id" | "date" | "currencyConfig"> & {
  currencyConfig: CurrencyConfigType;
};

export type DB = {
  expenditures: Expenditure[];
};

export const DEFAULT_DB_VALUE: DB = {
  expenditures: [],
};
