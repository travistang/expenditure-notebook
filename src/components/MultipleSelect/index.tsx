import React from "react";
import classnames from "classnames";
import SelectedOptionChip from "./SelectedOptionChip";

type Props = {
  values: string[];
  name: string;
  label: string;
  onChange: (values: string[]) => void;
  selectableOptions?: string[];
};
export default function MultipleSelect({
  name,
  label,
  values,
  onChange,
  selectableOptions = [],
}: Props) {
  const inputRef = React.useRef<HTMLDivElement>(null);
  const [editingValue, setEditingValue] = React.useState("");

  const onAddOption = (selectedOption?: string) => {
    const finalAddingOption = selectedOption || editingValue;
    if (!finalAddingOption) {
      return;
    }
    const hasExistingOptionMatchingInput = values.find(
      (opt) => opt.toLowerCase() === finalAddingOption.toLowerCase()
    );
    if (hasExistingOptionMatchingInput) {
      return;
    }
    onChange([...values, finalAddingOption]);
    setEditingValue("");
  };

  const onRemove = (option: string) => () => {
    onChange(values.filter((opt) => opt !== option));
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      onAddOption();
    }

    if (
      e.key === "Backspace" &&
      editingValue.length === 0 &&
      values.length > 0
    ) {
      onRemove(values[values.length - 1])();
    }
  };

  const displayingSelectableOptions =
    editingValue.length < 2
      ? []
      : selectableOptions
          .filter(
            (opt) =>
              opt.toLowerCase().includes(editingValue.toLowerCase()) &&
              !values.find((value) => value.toLowerCase() === opt.toLowerCase())
          )
          .sort()
          .slice(0, 5);
  return (
    <div className="vertical gap-1 overflow-y-visible">
      <label htmlFor={name}>{label}</label>
      <div className="flex items-center gap-2 overflow-x-auto max-w-md">
        {values.map((value) => (
          <SelectedOptionChip
            text={value}
            key={value}
            onDelete={onRemove(value)}
          />
        ))}
      </div>
      <div
        ref={inputRef}
        className={classnames(
          "relative inline-block rounded-lg bg-primary-500 p-4 horizontal overflow-x-auto overflow-y-hidden",
          "gap-2"
        )}
      >
        <input
          onKeyDown={onKeyDown}
          className="bg-primary-500 w-full outline-none text-xl h-4"
          value={editingValue}
          onChange={(e) => setEditingValue(e.target.value)}
        />
      </div>
      {displayingSelectableOptions?.length > 0 && (
        <div
          style={{
            top: inputRef?.current?.getBoundingClientRect()?.bottom,
          }}
          className="absolute min-h-20 bg-primary-500 rounded-lg left-0 right-0  z-20 max-h-32 mt-2 overflow-y-auto"
        >
          {displayingSelectableOptions.map((opt) => (
            <div
              key={opt}
              onClick={() => onAddOption(opt)}
              className="cursor-pointer px-2 h-12 whitespace-nowrap overflow-ellipsis horizontal-center hover:bg-primary-700"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
