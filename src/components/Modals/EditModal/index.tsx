import React from "react";
import { useRecoilState } from "recoil";
import {
  modalAtom,
  ModalType,
  useCloseModal,
  useSetEditFormValue,
} from "../../../atoms/modalAtom";
import DateInput from "../../DateInput";
import DisplayInput from "../../DisplayInput";
import Modal from "../../Modal";
import MultipleSelect from "../../MultipleSelect";
import Section from "../../Section";
import ButtonsRow from "./ButtonsRow";
import CategorySection from "./CategorySection";
import CurrencyInputSection from "./CurrencyInputSection";
import ValueInfo from "./ValueInfo";

export default function EditModal() {
  const [modalAtomValue] = useRecoilState(modalAtom);
  const closeModal = useCloseModal();
  const setEditFormValue = useSetEditFormValue();

  if (modalAtomValue.type !== ModalType.EditModal) return null;
  const { expenditure } = modalAtomValue;

  return (
    <Modal opened title="Expenditure information" onClose={closeModal}>
      <div className="flex flex-col items-stretch gap-2 h-full">
        <div className="grid grid-cols-2 items-center justify-between">
          <DisplayInput
            value={expenditure.description}
            name="description"
            className="flex-1 flex-shrink-0"
            inputClassName="border border-font rounded-lg px-2 -mx-2 flex-1 flex-shrink-0"
            onChange={setEditFormValue("description")}
          />
          <ValueInfo
            onChangeAmount={setEditFormValue("amount")}
            amount={expenditure.amount}
            currencyConfig={expenditure.currencyConfig}
          />
        </div>
        <CategorySection
          category={expenditure.category}
          onChange={setEditFormValue("category")}
        />
        <CurrencyInputSection
          currencyConfig={expenditure.currencyConfig}
          onChange={setEditFormValue("currencyConfig")}
        />
        <Section title="Labels">
          <MultipleSelect
            values={expenditure.labels}
            label=""
            name="labels"
            onChange={setEditFormValue("labels")}
          />
        </Section>
        <Section title="Date">
          <DateInput
            date={expenditure.date?.getTime() ?? Date.now()}
            onChange={(d) => setEditFormValue("date")(new Date(d))}
          />
        </Section>
        <div className="flex-1" />
        <ButtonsRow expenditure={expenditure} />
      </div>
    </Modal>
  );
}
