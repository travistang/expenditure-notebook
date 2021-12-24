import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { Currency, Form } from "../backend/types";
import toast from "react-hot-toast";
import { LocalStorageContext } from "../contexts/LocalStorageContext";

type Props = {
  onSubmit: () => void;
  formValue: Form;
  onOpenUploadModal: () => void;
};
export default function SubmitButton({
  onOpenUploadModal,
  formValue,
  onSubmit,
}: Props) {
  const { addExpenditure } = React.useContext(LocalStorageContext);
  const saveForm = () => {
    if (formValue.amount <= 0 || !formValue.description) {
      toast.error("missing description or amount is invalid.");
      return;
    }
    if (
      [0, 1].includes(formValue.currencyConfig.exchangeRate) &&
      formValue.currencyConfig.currency !== Currency.EUR
    ) {
      toast.error("Exchange rate cannot be 0 or 1");
      return;
    }

    const finalAmountInEuro =
      formValue.currencyConfig.currency === Currency.EUR
        ? formValue.amount
        : formValue.amount / formValue.currencyConfig.exchangeRate;
    addExpenditure({
      ...formValue,
      amount: finalAmountInEuro / 100,
      date: new Date(),
      id: `${new Date().getTime()}-${Math.random().toString().split(".")[1]}`,
    });
    onSubmit();
    toast.success("Expenditure logged!");
  };
  return (
    <div className="h-1/6 md:h-1/3 center w-full relative">
      <button
        onClick={saveForm}
        className="h-20 w-20 md:h-96 md:w-96 rounded-full bg-secondary-500 text-xl md:text-7xl"
      >
        <FontAwesomeIcon icon={faPen} />
      </button>
      <div className="absolute right-0 top-0 h-full horizontal-center gap-2">
        <button
          onClick={onOpenUploadModal}
          className="text-3xl md:text-7xl rounded-full center h-12 w-12 bg-color-50 text-primary-700"
        >
          <FontAwesomeIcon icon={faQrcode} className="text-primary-700" />
        </button>
      </div>
    </div>
  );
}
