import React from 'react';
import { ExpenditureFilter } from '../../../domain/Expenditure';
import { NumericalFilter } from '../../../domain/Filter';
import { Modifier } from '../../../utils/types';
import MultipleSelect from '../../MultipleSelect';
import AmountFilter from './AmountFilter';


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
  };
  return (
    <div className="grid grid-cols-6 gap-2 pt-4">
      <AmountFilter
        label="Min. amount"
        onChange={v => setAmountFilter('lte')(v ?? undefined)}
        value={filter.amount?.lte ?? null}
      />
      <AmountFilter
        label="Max. amount"
        onChange={v => setAmountFilter('gte')(v ?? undefined)}
        value={filter.amount?.gte ?? null}
      />
      <MultipleSelect
        label="Containing labels"
        name="labels"
        className='col-span-full'
        chipClassName='bg-font bg-opacity-20 py-0'
        inputClassName='rounded-full h-8 px-4 py-0 text-sm bg-font bg-opacity-20 font-bold'
        innerInputClassName='bg-opacity-0 text-sm'
        values={filter.labels?.containsEvery ?? []}
        onChange={v => setFilter('labels')({
        containsEvery: v
      })} />
    </div>
  );
}