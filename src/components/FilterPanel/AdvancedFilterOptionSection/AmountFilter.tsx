import React from 'react';
import { Currency } from '../../../backend/types';
import AmountInput from '../../AmountInput';

type Props = {
  value: number | null;
  label: string;
  onChange: (v: number | null) => void;
  className?: string;
}
export default function AmountFilter({ label, value, onChange, className}: Props) {
  return (
    <AmountInput
      nullable
      onChange={onChange}
      value={value}
      label={label}
      className={className ?? 'col-span-3'}
      innerClassName="rounded-full py-1 bg-font bg-opacity-20 px-2 font-bold"
      maxFontSize={16}
      currency={Currency.EUR}
    />
  );
}