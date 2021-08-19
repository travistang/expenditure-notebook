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
    <div className="vertical gap-1">
      <label htmlFor={name}>{label}</label>
      <div
        className={classnames(
          "relative rounded-lg bg-primary-200 p-4 horizontal",
          "gap-2"
        )}
      >
        {values.map((value) => (
          <SelectedOptionChip
            text={value}
            key={value}
            onDelete={onRemove(value)}
          />
        ))}
        <input
          onKeyDown={onKeyDown}
          className="bg-primary-200 w-full outline-none text-2xl"
          value={editingValue}
          onChange={(e) => setEditingValue(e.target.value)}
        />
        {displayingSelectableOptions && (
          <div className="absolute min-h-20 bg-primary-200 rounded-lg left-0 right-0 top-full mt-2 overflow-y-scroll">
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
    </div>
  );
}
