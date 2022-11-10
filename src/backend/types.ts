
export enum Currency {
  EUR = "EUR",
  USD = "USD",
  PLN = "PLN",
  HKD = "HKD",
}

export enum ExpenditureCategory {
  Groceries = 'groceries',
  Housing = 'housing',
  OutgoingExpenditure = 'outgoing-expenditures',
  Utilities = 'utilities',
  Leisure = 'leisure',
  RegularCosts = 'regular-costs',
}

export type CurrencyConfigType = { currency: Currency; exchangeRate: number };

export type Expenditure = {
  description: string;
  date: Date;
  amount: number;
  labels: string[];
  category?: ExpenditureCategory;
  id: string;
  currencyConfig: CurrencyConfigType;
};

export type Form = Omit<Expenditure, "id" | "date" | "currencyConfig"> & {
  id?: string;
  date?: Date;
  currencyConfig: CurrencyConfigType;
};

export type DB = {
  expenditures: Expenditure[];
};

export const DEFAULT_DB_VALUE: DB = {
  expenditures: [],
};

export type PaginationConfig = {
  pageSize: number;
  page: number;
}