import React, { useState } from 'react';
import classNames from 'classnames';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExpenditureFilter } from '../../domain/Expenditure';
import { Modifier } from '../../utils/types';
import AdvancedFilterOptionSection from './AdvancedFilterOptionSection';
import AdvancedFilterDropdown from './AdvancedFilterDropdown';
import { useRecoilState } from 'recoil';
import { filterAtom } from '../../atoms/filterAtom';

export default function FilterPanel() {
  const [expanded, setExpanded] = useState(false);
  const [filterOptions, setFilterOption] = useRecoilState(filterAtom);

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
          <input value={filterOptions.description?.contains ?? ''} onChange={e => setFilter('description')({ contains: e.target.value })} className='outline-none bg-background-secondary rounded-full px-2' />
        </div>
        {expanded && (
          <AdvancedFilterOptionSection filter={filterOptions} setFilter={setFilter} />
        )}
      </div>
      <AdvancedFilterDropdown expanded={expanded} onToggle={() => setExpanded(!expanded)} />
    </div>
  )
}