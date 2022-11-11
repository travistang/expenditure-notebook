import classNames from "classnames";
import { format, isSameDay } from "date-fns";
import React from "react";

type Props = {
  selected?: boolean;
  className?: string;
  date: number;
  onClick: () => void;
};
export default function DayCell({ onClick, selected, className, date }: Props) {
  const isToday = isSameDay(Date.now(), date);
  return (
    <span
      onClick={onClick}
      className={classNames(
        "flex-shrink-0 rounded-full flex items-center justify-center p-1 text-center text-sm",
        selected && "bg-primary text-background",
        isToday && !selected && "text-primary",
        className
      )}
    >
      {format(date, "dd")}
    </span>
  );
}
