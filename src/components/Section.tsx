import classNames from 'classnames';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  title: string;
};

export default function Section({ children, title, className}: Props) {
  return (
    <div className={classNames(
      "flex flex-col items-stretch rounded-lg p-2 bg-background bg-opacity-50",
      className)}>
      <span className="text-xs pb-1">{title}</span>
      {children}
    </div>
  )
}