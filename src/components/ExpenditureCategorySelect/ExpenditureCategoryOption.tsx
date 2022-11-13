import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { ExpenditureCategory } from '../../backend/types';
import { ExpenditureCategoryIconProps } from '../../constants';
import { prettifyString } from '../../utils/String';

type Props = {
  category: ExpenditureCategory;
  selected: boolean;
  onSelect: () => void;
}
export default function ExpenditureCategoryOption({ category, selected, onSelect}: Props) {
  return (
    <div
      key={category}
      onClick={onSelect}
      className={classNames(
        'p-2 flex flex-col col-span-1 rounded-lg items-center justify-center text-center',
        selected && "bg-primary"
      )}
    >
      <FontAwesomeIcon icon={ExpenditureCategoryIconProps[category]}
        className={classNames("text-2xl", selected && "child:fill-background")}
      />
      <span className={classNames(
        "text-xs leading-3 pt-1",
        selected && "text-background")
      }>
        {prettifyString(category)}
      </span>
    </div>
  )
}