import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useRecoilState } from 'recoil';
import { modalAtom, ModalType, useCloseModal, useSetEditFormValue } from '../../../atoms/modalAtom';
import Button from '../../Button';
import DisplayInput from '../../DisplayInput';
import Modal from '../../Modal';
import MultipleSelect from '../../MultipleSelect';
import Section from '../../Section';
import CategorySection from './CategorySection';
import CurrencyInputSection from './CurrencyInputSection';
import ValueInfo from './ValueInfo';

export default function EditModal() {
  const [modalAtomValue] = useRecoilState(modalAtom);
  const closeModal = useCloseModal();
  const setEditFormValue = useSetEditFormValue();

  if (modalAtomValue.type !== ModalType.EditModal) return null;
  const { expenditure } = modalAtomValue;

  return (
    <Modal opened title="Expenditure information" onClose={closeModal}>
      <div className="flex flex-col items-stretch gap-2 h-full">
        <div className="flex items-center justify-between">
          <DisplayInput
            value={expenditure.description}
            name="description"
            label=""
            inputClassName='border border-font rounded-lg px-2 -mx-2'
            onChange={setEditFormValue("description")}
          />
          <ValueInfo amount={expenditure.amount} currencyConfig={expenditure.currencyConfig} />
        </div>
        <CategorySection
          category={expenditure.category}
          onChange={setEditFormValue('category')}
        />
        <CurrencyInputSection
          currencyConfig={expenditure.currencyConfig}
          onChange={setEditFormValue('currencyConfig')}
        />
        <Section title='Labels'>
          <MultipleSelect
            values={expenditure.labels}
            label=""
            name="labels"
            onChange={setEditFormValue('labels')}
          />
        </Section>
        <div className="flex-1" />
        <div className="flex items-center justify-between sticky -bottom-4 bg-background-secondary">
          <Button
            onClick={console.log}
            text="Delete"
            icon={faTrash}
            className="text-error child:fill-error h-12 mb-2"
          />
        </div>
      </div>
    </Modal>
  )
}