import React, { useState } from "react";
import Input from "./Input";

type Props = {
  className?: string;
  inputClassName?: string;
  value: string;
  label?: string;
  name: string;
  onChange: (v: string) => void;
};

export default function DisplayInput({
  label = "",
  name,
  className,
  value,
  onChange,
  inputClassName,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);

  if (!isEditing) {
    return (
      <div onClick={() => setIsEditing(true)} className={className}>
        {value}
      </div>
    );
  }

  return (
    <Input
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      className={className}
      inputClassName={inputClassName}
      onOutsideClick={() => setIsEditing(false)}
    />
  );
}
