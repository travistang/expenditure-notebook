import classNames from "classnames";
import getSymbolFromCurrency from "currency-symbol-map";
import React, { KeyboardEventHandler } from "react";
import { Currency } from "../../backend/types";

type Props = {
  nullable?: boolean;
  value: number | null;
  onChange: (value: number | null) => void;
  label?: string;
  currency?: Currency;
  className?: string;
  innerClassName?: string;
  maxFontSize?: number;
};

const DEFAULT_FONT_SIZE = 84;
const getValueString = (value: number | null, currency?: Currency, nullable?: boolean) => {
  if (nullable && value === null) {
    return '';
  }
  const currencyString = currency ? getSymbolFromCurrency(
    currency
  ) : '';
  const usingValue = value ?? 0;
  return `${(usingValue / 100).toFixed(2)}${currencyString}`;
};
const onRemoveDigit = (value: number | null, nullable?: boolean) => {
  if (nullable && !value) {
    return null;
  }

  const usingValue = value ?? 0;
  return Math.floor(usingValue / 10);
}

const onAddDigit = (value: number | null, digit: number, nullable?: boolean) => {
  if (value === null) return digit;
  return value * 10 + digit;
}

export default function AmountInput({
  value,
  label,
  nullable,
  currency,
  onChange,
  className,
  innerClassName,
  maxFontSize = DEFAULT_FONT_SIZE,
}: Props) {
  const inputRef = React.useRef(null);

  const valueString = getValueString(value ?? null, currency, nullable);
  const screenWidth = window.screen.width;
  const fontSize = Math.min((1.5 * screenWidth) / valueString.length, maxFontSize);
  const onInput: KeyboardEventHandler = (e) => {
    const key = e.key;
    const keyAsDigit = parseInt(key);
    if (!Number.isNaN(keyAsDigit)) {
      const newValue = onAddDigit(value, keyAsDigit, nullable);
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
        className={classNames(className ?? "center text-font bg-background text-center")}
        value={valueString}
        type="tel"
        onKeyDown={onInput}
      ></input>
    </div>
  );
}
