import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type Props = {
  expanded?: boolean;
  onToggle: () => void;
}
export default function AdvancedFilterDropdown({ expanded, onToggle }: Props) {
  return (
    <div className="flex items-center gap-2 text-opacity-75 text-xs" onClick={onToggle}>
      <FontAwesomeIcon icon={expanded ? faCaretUp : faCaretDown} />
      {expanded ? "Hide filter options" : "Advanced options..."}
    </div>
  )
}