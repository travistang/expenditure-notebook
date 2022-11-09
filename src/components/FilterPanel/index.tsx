import React, { useState } from 'react';
import classNames from 'classnames';
import { faCaretDown, faCaretUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExpenditureFilter } from '../../domain/Expenditure';
import { Modifier } from '../../utils/types';
import AdvancedFilterOptionSection from './AdvancedFilterOptionSection';

export default function FilterPanel() {
  const [expanded, setExpanded] = useState(false);
  const [filterOptions, setFilterOption] = useState<ExpenditureFilter>({});

  const setFilter: Modifier<ExpenditureFilter> = (field) => (value) => {
    setFilterOption({
      ...filterOptions,
      [field]: value
    });
  };

  return (
    <div className="flex flex-col items-stretch gap-2">
      <div className={classNames(
        "p-2 flex flex-col items-stretch bg-background-secondary",
        expanded ? 'rounded-lg' : 'rounded-full'
      )}>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faSearch} className="text-font" />
          <input className='outline-none bg-background-secondary rounded-full px-2' />
        </div>
        {expanded && (
          <AdvancedFilterOptionSection filter={filterOptions} setFilter={setFilter} />
        )}
      </div>
      <div className="flex items-center gap-2 text-opacity-75 text-xs" onClick={() => setExpanded(!expanded)}>
        <FontAwesomeIcon icon={expanded ? faCaretUp : faCaretDown} />
        {expanded ? "Hide filter options" : "Advanced options..."}
      </div>
    </div>
  )
}