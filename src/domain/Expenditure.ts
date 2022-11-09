import { Currency, Expenditure, Form } from "../backend/types";
import { FilterType } from "./Filter";

export const validateForm = (form: Form): string | null => {
  if (form.amount <= 0 || !form.description) {
    return "missing description or amount is invalid.";
  }
  if (
    form.currencyConfig &&
    [0, 1].includes(form.currencyConfig.exchangeRate) &&
    form.currencyConfig.currency !== Currency.EUR
  ) {
    return "Exchange rate cannot be 0 or 1";
  }

  return null;
};

export const mapFormToExpenditure = (form: Form): Expenditure => {
  const finalAmountInEuro =
    form.currencyConfig.currency === Currency.EUR
      ? form.amount
      : form.amount / form.currencyConfig.exchangeRate;
  return {
    ...form,
    amount: finalAmountInEuro / 100,
    date: new Date(),
    id: `${new Date().getTime()}-${Math.random().toString().split(".")[1]}`,
  };
};

export type ExpenditureFilter = FilterType<Expenditure>;
