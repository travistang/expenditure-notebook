import classNames from "classnames";
import {
  endOfMonth,
  startOfMonth,
  eachDayOfInterval,
  getDay,
  isSameDay,
} from "date-fns";
import React from "react";
import { range } from "../../utils/Array";
import DayCell from "./DayCell";
import WeekHeader from "./WeekHeader";

type Props = {
  className?: string;
  date?: number;
  selectedDates?: number[];
  onChange: (newDate: number) => void;
};
export default function Calendar({
  className,
  date: selectedDate,
  selectedDates = [],
  onChange,
}: Props) {
  const dayInMonth = selectedDate ?? Date.now();
  const start = startOfMonth(dayInMonth);
  const end = endOfMonth(dayInMonth);
  const interval = { start, end };
  const numDaysFromWeekStart = getDay(start);
  return (
    <div
      className={classNames("grid grid-cols-7 gap-2 justify-center", className)}
    >
      <WeekHeader />
      {range(numDaysFromWeekStart).map((_, i) => (
        <span key={i} />
      ))}
      {eachDayOfInterval(interval)
        .map((date) => date.getTime())
        .map((date) => (
          <DayCell
            date={date}
            key={date}
            selected={!!selectedDates.find((d) => isSameDay(d, date))}
            onClick={() => onChange(date)}
          />
        ))}
    </div>
  );
}
