import React from 'react';
import { ExpenditureCategory } from '../../../backend/types';
import ExpenditureCategorySelect from '../../ExpenditureCategorySelect';
import Section from '../../Section';

type Props = {
  category?: ExpenditureCategory;
  onChange: (category: ExpenditureCategory) => void;
}
export default function CategorySection({ category, onChange}: Props) {
  return (
    <Section title="Category">
      <ExpenditureCategorySelect category={category} onSelect={onChange}  />
    </Section>
  )
}