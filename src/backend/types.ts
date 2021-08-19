export type Expenditure = {
  description: string;
  date: Date;
  amount: number;
  labels: string[];
};

export type DB = {
  expenditures: Expenditure[];
};
