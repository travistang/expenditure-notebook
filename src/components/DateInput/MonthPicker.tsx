import classNames from "classnames";
import { addMonths, format, getMonth, isSameMonth, setMonth } from "date-fns";
import { startOfYear } from "date-fns/esm";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { range } from "../../utils/Array";

type Props = {
  month: number;
  onChange: (n: number) => void;
  onClose: () => void;
};
export default function MonthPicker({
  onClose,
  month: selectedMonth,
  onChange,
}: Props) {
  const yearStart = startOfYear(selectedMonth);
  const onSelectMonth = (monthIndex: number) => {
    onChange(setMonth(yearStart, monthIndex).getTime());
  };
  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <div className="rounded-lg absolute top-full left-[-50%] w-max p-2 z-40 shadow-lg grid grid-cols-3 gap-1 bg-background-secondary">
        {range(12)
          .map((monthIndex) => addMonths(yearStart, monthIndex).getTime())
          .map((month) => (
            <span
              onClick={() => onSelectMonth(getMonth(month))}
              className={classNames(
                "rounded-lg px-2",
                isSameMonth(month, selectedMonth) &&
                  "bg-primary text-background"
              )}
            >
              {format(month, "MMM")}
            </span>
          ))}
      </div>
    </OutsideClickHandler>
  );
}
