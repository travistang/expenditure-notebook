export type Expenditure = {
  description: string;
  date: Date;
  amount: number;
  labels: string[];
  id: string;
};

export type DB = {
  expenditures: Expenditure[];
};

export const DEFAULT_DB_VALUE: DB = {
  expenditures: [],
};
