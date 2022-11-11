import React from "react";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Form } from "../backend/types";
import { mapFormToExpenditure, validateForm } from "../domain/Expenditure";
import Repository from "../backend/dexie";

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
    <div className="h-1/6 md:h-1/3 center w-full relative">
      <button
        onClick={saveForm}
        className="w-1/2 py-4 px-2 md:h-96 lg:h-48 rounded-full bg-primary text-background text-xl md:text-7xl gap-4 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faPen} />
        Record
      </button>
    </div>
  );
}
