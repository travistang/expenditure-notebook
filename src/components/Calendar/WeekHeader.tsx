import classNames from "classnames";
import { startOfWeek, addDays, format } from "date-fns";
import React from "react";
import { range } from "../../utils/Array";

export default function WeekHeader() {
  const weekStart = startOfWeek(Date.now());
  const weekendIndices = [0, 6];
  return (
    <>
      {range(7).map((week) => (
        <span
          className={classNames(
            "text-center text-sm",
            weekendIndices.includes(week) && "text-error"
          )}
        >
          {format(addDays(weekStart, week), "eeeee")}
        </span>
      ))}
    </>
  );
}
