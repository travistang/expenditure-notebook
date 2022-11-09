import { Expenditure } from "../backend/types";

export type FieldsWithType<T extends object, Fs extends T[keyof T]> = keyof {
  [K in keyof T as T[K] extends Fs ? K : never]: T[K];
};

export type NumericType = number | Date;
export type NumericalFilter<T extends NumericType> = {
  gte?: T;
  lte?: T;
  equal?: T;
  notEqual?: T;
};

export type StringFilter = {
  contains?: string;
  equal?: string;
  doesNotContain?: string;
};

export type ArrayFilter<T> = {
  contains?: T;
  containsSome?: T[];
  containsEvery?: T[];
  min?: number;
  max?: number;
};

export type FilterType<T> =
  T extends (infer R)[]
  ? ArrayFilter<R>
  : T extends string
  ? StringFilter
  : T extends NumericType
  ? NumericalFilter<T>
  : T extends object
  ? {
      [K in keyof T]?: FilterType<T[K]>;
    }
  : never;

const stringMatchesFilter = (str: string, filter: FilterType<string>) => {
  if (filter.equal) {
    return filter.equal === str;
  }
  if (filter.contains) {
    return str.toLowerCase().includes(filter.contains);
  }

  if (filter.doesNotContain) {
    return !str.toLowerCase().includes(filter.doesNotContain);
  }

  return true;
};

const numericsMatchFilter = (
  numeric: NumericType,
  filter: NumericalFilter<NumericType>
) => {
  if (filter.equal) {
    return numeric === filter.equal;
  }

  if (filter.gte) {
    return numeric >= filter.gte;
  }

  if (filter.lte) {
    return numeric >= filter.lte;
  }

  if (filter.notEqual) {
    return numeric !== filter.notEqual;
  }

  return true;
};

const arrayMatchFilter = <T>(
  array: Array<T>,
  filter: ArrayFilter<T>
) => {
  if (filter.contains) {
    return array.includes(filter.contains)
  }

  if (filter.containsEvery) {
    return filter.containsEvery.every(value => array.includes(value));
  }

  if (filter.containsSome) {
    return filter.containsSome.some(value => array.includes(value));
  }

  if (filter.min) {
    return array.length >= filter.min;
  }

  if (filter.max) {
    return array.length <= filter.max;
  }

  return true;
}

export const expenditureMatchesFilter = (
  expenditure: Expenditure,
  filter: FilterType<Expenditure>
) => {
  const stringFields: (FieldsWithType<Expenditure, string> | "category")[] = [
    "description",
    "category",
  ];
  const numericsFields: FieldsWithType<Expenditure, NumericType>[] = [
    "amount",
    "date",
  ];

  if (
    stringFields.some(
      (field) =>
        filter[field] &&
        !stringMatchesFilter(expenditure[field] as string, filter[field]!)
    )
  ) {
    return false;
  }

  if (
    numericsFields.some(
      (field) =>
        filter[field] &&
        !numericsMatchFilter(expenditure[field], filter[field]!)
    )
  ) {
    return false;
  }

  if (filter.labels && !arrayMatchFilter(expenditure.labels, filter.labels)) {
    return false
  };

  return true;
};
