import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { addMonths, format } from "date-fns";
import React, { useState } from "react";
import Button from "../Button";
import MonthPicker from "./MonthPicker";
import YearPicker from "./YearPicker";

type Props = {
  month: number;
  onChange: (month: number) => void;
};

enum SelectingPart {
  Month = "month",
  Year = "year",
}

export default function MonthYearPicker({ month, onChange }: Props) {
  const [selectingPart, setSelectingPart] = useState<SelectingPart | null>(
    null
  );
  const closePicker = () => setSelectingPart(null);
  const onSelectAndClosePicker = (newMonth: number) => {
    onChange(newMonth);
    closePicker();
  };
  return (
    <div className="flex flex-row justify-between">
      <Button
        icon={faArrowLeft}
        onClick={() => onChange(addMonths(month, -1).getTime())}
      />
      <div className="relative rounded-full px-2 bg-font bg-opacity-10 gap-2 flex items-center">
        <span onClick={() => setSelectingPart(SelectingPart.Month)}>
          {format(month, "MMM")}
        </span>
        <span onClick={() => setSelectingPart(SelectingPart.Year)}>
          {format(month, "yyyy")}
        </span>
        {selectingPart === SelectingPart.Month && (
          <MonthPicker
            onClose={closePicker}
            month={month}
            onChange={onSelectAndClosePicker}
          />
        )}
        {selectingPart === SelectingPart.Year && (
          <YearPicker onClose={closePicker} year={month} onChange={onChange} />
        )}
      </div>
      <Button
        icon={faArrowRight}
        onClick={() => onChange(addMonths(month, 1).getTime())}
      />
    </div>
  );
}
