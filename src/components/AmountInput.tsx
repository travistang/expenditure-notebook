import React, { KeyboardEventHandler } from "react";

export default function AmountInput() {
  const [value, setValue] = React.useState(0);
  const inputRef = React.useRef(null);

  const valueString = (value / 100).toFixed(2);

  const screenWidth = window.screen.width;
  const onInput: KeyboardEventHandler = (e) => {
    const key = e.key;
    const keyAsDigit = parseInt(key);
    if (!Number.isNaN(keyAsDigit)) {
      setValue(value * 10 + keyAsDigit);
    }

    if (key === "Backspace") {
      setValue(Math.floor(value / 10));
    }
  };
  return (
    <input
      ref={inputRef}
      style={{ fontSize: (1.5 * screenWidth) / valueString.length }}
      className="digit center text-color-100 bg-primary-500 text-center"
      value={valueString}
      type="tel"
      onKeyDown={onInput}
    ></input>
  );
}
