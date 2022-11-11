import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import OutsideClickHandler from "react-outside-click-handler";
import { addYears, format } from "date-fns";
import React from "react";
import Button from "../Button";

type Props = {
  year: number;
  onChange: (year: number) => void;
  onClose: () => void;
};
export default function YearPicker({ year, onClose, onChange }: Props) {
  const changeYear = (diff: 1 | -1) => () =>
    onChange(addYears(year, diff).getTime());
  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <div className="absolute top-full left-[-15%] bg-background-secondary rounded-full flex items-center gap-2">
        <Button icon={faArrowLeft} onClick={changeYear(-1)} />
        <span>{format(year, "yyyy")}</span>
        <Button icon={faArrowRight} onClick={changeYear(1)} />
      </div>
    </OutsideClickHandler>
  );
}
