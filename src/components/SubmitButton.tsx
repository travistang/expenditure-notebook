import React from "react";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { Form } from "../backend/types";
import { mapFormToExpenditure, validateForm } from "../domain/Expenditure";
import Repository from '../backend/dexie';

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
  const saveForm = () => {
    const validationError = validateForm(formValue);
    if (validationError) {
      toast.error(validationError);
      return;
    }

    const newExpenditure = mapFormToExpenditure(formValue);
    Repository.add(newExpenditure).then(() => {
      onSubmit();
      toast.success("Expenditure logged!");
    }).catch(() => {
      toast.error("Failed to add expenditure");
    });
  };

  return (
    <div className="h-1/6 md:h-1/3 center w-full relative">
      <button
        onClick={saveForm}
        className="h-20 w-20 md:h-96 md:w-96 lg:h-48 lg:w-48 rounded-full bg-primary text-background text-xl md:text-7xl"
      >
        <FontAwesomeIcon icon={faPen} />
      </button>
      <div className="absolute right-0 top-0 h-full horizontal-center gap-2">
        <button
          onClick={onOpenUploadModal}
          className="text-3xl md:text-7xl rounded-full center h-12 w-12 lg:h-24 lg:w-24 bg-color-50 text-primary-700"
        >
          <FontAwesomeIcon icon={faQrcode} className="text-primary-700" />
        </button>
      </div>
    </div>
  );
}
