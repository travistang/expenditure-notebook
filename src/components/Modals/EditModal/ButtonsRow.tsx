import { faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import toast from "react-hot-toast";
import { useCloseModal } from "../../../atoms/modalAtom";
import ExpenditureRepository from "../../../backend/dexie";
import { Expenditure, Form } from "../../../backend/types";
import { promiseWithToast } from "../../../utils/Toast";
import Button from "../../Button";

type Props = {
  expenditure: Form;
};
export default function ButtonsRow({ expenditure }: Props) {
  const closeModal = useCloseModal();

  const deleteItem = async () => {
    if (!expenditure.id) return;
    await ExpenditureRepository.remove(expenditure.id);
    toast.success("Expenditure deleted");
    closeModal();
  };

  const saveItem = async () => {
    const { id, ...formValue } = expenditure;
    if (!id) {
      return;
    }
    const updated = await promiseWithToast(
      ExpenditureRepository.edit(id, formValue as Omit<Expenditure, "id">),
      {
        successMessage: "Updated",
        failMessage: "Cannot update item",
      }
    );
    if (updated) {
      closeModal();
    }
  };

  return (
    <div className="flex items-center justify-between sticky -bottom-4 bg-background-secondary">
      {expenditure.id && (
        <>
          <Button
            onClick={deleteItem}
            text="Delete"
            icon={faTrash}
            className="text-error child:fill-error h-12 mb-2"
          />
          <Button
            onClick={saveItem}
            text="Save"
            icon={faSave}
            className="h-12 mb-2"
          />
        </>
      )}
    </div>
  );
}
