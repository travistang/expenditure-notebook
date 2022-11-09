import React from 'react';
import { Currency } from '../../../backend/types';
import { ExpenditureFilter } from '../../../domain/Expenditure';
import { NumericalFilter } from '../../../domain/Filter';
import { Modifier } from '../../../utils/types';
import AmountInput from '../../AmountInput';


type Props = {
  setFilter: Modifier<ExpenditureFilter>;
  filter: ExpenditureFilter;
};
export default function AdvancedFilterOptionSection({ filter, setFilter }: Props) {
  const setAmountFilter: Modifier<NumericalFilter<number>> = (field) => (value) => {
    setFilter('amount')({
      ...filter.amount,
      [field]: value
    });
  }
  return (
    <div className="grid grid-cols-6 gap-2 pt-4">
      <AmountInput
        nullable
        onChange={v => setAmountFilter('lte')(v ?? undefined)}
        value={filter.amount?.lte ?? null}
        label="Min. amount"
        className='col-span-3'
        maxFontSize={16}
        currency={Currency.EUR}
      />
      <AmountInput
        nullable
        onChange={v => setAmountFilter('gte')(v ?? undefined)}
        value={filter.amount?.gte ?? null}
        label="Max. amount"
        className='col-span-3'
        maxFontSize={16}
        currency={Currency.EUR}
      />
    </div>
  );
}