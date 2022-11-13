import classNames from "classnames";
import React, { useState } from "react";
import Calendar from "../Calendar";
import MonthYearPicker from "./MonthYearPicker";
import TimePicker from "./TimePicker";

export enum DateInputMode {
  Date = "date",
  DateTime = "datetime",
}

type Props = {
  date: number;
  mode?: DateInputMode;
  onChange: (date: number) => void;
  className?: string;
};
export default function DateInput({
  date,
  onChange,
  mode = DateInputMode.DateTime,
  className,
}: Props) {
  const [viewingMonth, setViewingMonth] = useState<number>(date);
  return (
    <div className={classNames("flex flex-col gap-2 items-stretch", className)}>
      <MonthYearPicker month={viewingMonth} onChange={setViewingMonth} />
      <Calendar
        selectedDates={[date]}
        date={viewingMonth}
        onChange={onChange}
      />
      {mode === DateInputMode.DateTime && (
        <TimePicker time={date} onChange={onChange} />
      )}
    </div>
  );
}
