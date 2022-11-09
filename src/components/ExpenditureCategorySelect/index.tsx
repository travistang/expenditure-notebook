import React from 'react';
import classNames from 'classnames';
import { ExpenditureCategory } from '../../backend/types';
import ExpenditureCategoryOption from './ExpenditureCategoryOption';

type Props = {
  category?: ExpenditureCategory;
  onSelect: (category: ExpenditureCategory) => void;
  className?: string;
}

export default function ExpenditureCategorySelect({
  category: selectedCategory,
  className,
  onSelect
}: Props) {
  return (
    <div className={classNames("grid grid-cols-3 gap-2", className)}>
      {Object.values(ExpenditureCategory).map((category) => (
        <ExpenditureCategoryOption
          category={category}
          selected={selectedCategory === category}
          key={category}
          onSelect={() => onSelect(category)}
          />
      ))}
    </div>
  )
}