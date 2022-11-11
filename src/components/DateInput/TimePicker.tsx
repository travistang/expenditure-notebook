import { format, setHours, setMinutes } from "date-fns";
import React from "react";

type Props = {
  time: number;
  onChange: (time: number) => void;
};
export default function TimePicker({ time, onChange }: Props) {
  const onInputHour = (hour: number) => {
    if (0 <= hour && hour <= 23) {
      onChange(setHours(time, hour).getTime());
    }
  };
  const onInputMinutes = (minutes: number) => {
    if (0 <= minutes && minutes <= 59) {
      onChange(setMinutes(time, minutes).getTime());
    }
  };

  return (
    <div className="flex items-center">
      <span className="rounded-lg bg-font bg-opacity-10 flex items-center p-2 w-1/3">
        <input
          className="bg-background-secondary bg-opacity-0 text-xl"
          value={format(time, "HH")}
          onChange={(e) => onInputHour(parseInt(e.target.value))}
        />
      </span>
      <span className="mx-4 text-lg">:</span>
      <span className="rounded-lg bg-font bg-opacity-10 flex items-center p-2 w-1/3">
        <input
          className="bg-background-secondary bg-opacity-0 text-xl"
          value={format(time, "mm")}
          onChange={(e) => onInputMinutes(parseInt(e.target.value))}
        />
      </span>
    </div>
  );
}
