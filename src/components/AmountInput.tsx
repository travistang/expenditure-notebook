import getSymbolFromCurrency from "currency-symbol-map";
import React, { KeyboardEventHandler } from "react";
import { Currency } from "../backend/types";

type Props = {
  value: number;
  currency: Currency;
  onChange: (value: number) => void;
};
export default function AmountInput({ value, currency, onChange }: Props) {
  const inputRef = React.useRef(null);

  const valueString = `${(value / 100).toFixed(2)}${getSymbolFromCurrency(
    currency
  )}`;

  const screenWidth = window.screen.width;
  const onInput: KeyboardEventHandler = (e) => {
    const key = e.key;
    const keyAsDigit = parseInt(key);
    if (!Number.isNaN(keyAsDigit)) {
      onChange(value * 10 + keyAsDigit);
    }

    if (key === "Backspace") {
      onChange(Math.floor(value / 10));
    }
  };
  return (
    <input
      ref={inputRef}
      style={{
        fontSize: Math.min((1.5 * screenWidth) / valueString.length, 128),
      }}
      className="digit center text-color-100 bg-primary-700 text-center"
      value={valueString}
      type="tel"
      onKeyDown={onInput}
    ></input>
  );
}
