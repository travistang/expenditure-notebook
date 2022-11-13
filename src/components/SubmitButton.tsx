import React from "react";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Form } from "../backend/types";
import { mapFormToExpenditure } from "../domain/Expenditure";
import Repository from "../backend/dexie";
import { checkError } from "../domain/Form";
import classNames from "classnames";

type Props = {
  onSubmit: () => void;
  formValue: Form;
};
export default function SubmitButton({ formValue, onSubmit }: Props) {
  const formErrorMessage = checkError(formValue);
  const saveForm = () => {
    if (formErrorMessage) {
      toast.error(formErrorMessage);
      return;
    }

    const newExpenditure = mapFormToExpenditure(formValue);
    Repository.add(newExpenditure)
      .then(() => {
        onSubmit();
        toast.success("Expenditure logged!");
      })
      .catch(() => {
        toast.error("Failed to add expenditure");
      });
  };

  return (
    <div className="h-1/6 md:h-1/3 center w-full sticky bottom-0">
      <button
        onClick={saveForm}
        className={classNames(
          "w-1/2 py-4 px-2 md:h-96 lg:h-48 rounded-full bg-primary text-background text-xl md:text-7xl gap-4 flex items-center justify-center",
          formErrorMessage && "opacity-50 cursor-not-allowed"
        )}
      >
        <FontAwesomeIcon icon={faPen} />
        Record
      </button>
    </div>
  );
}
