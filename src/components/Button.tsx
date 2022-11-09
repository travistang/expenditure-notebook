import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';

type Props = {
  onClick: () => void;
  className?: string;
  icon?: IconProp;
  text?: string;
}
export default function Button({ onClick, className, icon, text }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames("flex items-center px-2 gap-2", className)}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {text}
    </button>
  )
}