import classNames from "classnames";
import React, { KeyboardEventHandler } from "react";
import { Currency } from "../../backend/types";
import { getValueString, onAddDigit, onRemoveDigit } from "./useDigitHandler";

type Props = {
  nullable?: boolean;
  value: number | null;
  onChange: (value: number | null) => void;
  label?: string;
  currency?: Currency;
  className?: string;
  innerClassName?: string;
  maxFontSize?: number;
  mapValueFn?: (n: number | null) => number | null;
};

const DEFAULT_FONT_SIZE = 84;

export default function AmountInput({
  value,
  label,
  nullable,
  currency,
  onChange,
  className,
  innerClassName,
  maxFontSize = DEFAULT_FONT_SIZE,
  mapValueFn,
}: Props) {
  const inputRef = React.useRef(null);

  const valueString = getValueString(value ?? null, currency, nullable, mapValueFn);
  const screenWidth = window.screen.width;
  const fontSize = Math.min((1.5 * screenWidth) / valueString.length, maxFontSize);
  const onInput: KeyboardEventHandler = (e) => {
    const key = e.key;
    const keyAsDigit = parseInt(key);
    if (!Number.isNaN(keyAsDigit)) {
      const newValue = onAddDigit(value, keyAsDigit);
      onChange(newValue);
      return;
    }

    if (key === "Backspace") {
      const newValue = onRemoveDigit(value ?? null, nullable);
      onChange(newValue);
    }
  };

  return (
    <div className={classNames("flex flex-col gap-1", className)}>
      {label && <label>{label}</label>}
      <input
        ref={inputRef}
        style={{
          fontSize,
        }}
        className={classNames(innerClassName ?? "center text-font bg-background text-center")}
        value={valueString}
        type="tel"
        onKeyDown={onInput}
      ></input>
    </div>
  );
}
