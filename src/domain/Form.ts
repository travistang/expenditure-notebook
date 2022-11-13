import { Form } from "../backend/types";
import { isCurrencyConfigValid } from "./CurrencyConfig";

export enum FormError {
  MissingDescription = "description cannot be empty",
  MissingCategory = "Please select a category",
  InvalidAmount = "Amount is invalid",
  InvalidCurrencyConfig = "Exchange rate cannot be 0 or 1",
}

export const checkError = (form: Form): FormError | null => {
  if (!form.category) {
    return FormError.MissingCategory;
  }

  if (!form.description) {
    return FormError.MissingDescription;
  }

  if (form.amount === 0) {
    return FormError.InvalidAmount;
  }

  if (form.currencyConfig && !isCurrencyConfigValid(form.currencyConfig)) {
    return FormError.InvalidCurrencyConfig;
  }

  return null;
};
