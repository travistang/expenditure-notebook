import React from "react";
import AmountInput from "./components/AmountInput";
import Header from "./components/Header";

import "./App.css";
import Input from "./components/Input";
import SubmitButton from "./components/SubmitButton";
import MultipleSelect from "./components/MultipleSelect";

type Form = {
  amount: number;
  description: string;
  labels: string[];
};

export default function App() {
  const [formValue, setFormValue] = React.useState<Form>({
    amount: 0,
    description: "",
    labels: [],
  });
  return (
    <div className="absolute vertical inset-0 flex p-4 bg-primary-500">
      <Header />
      <AmountInput />
      <Input
        name="description"
        label="description"
        value={formValue.description}
        onChange={(desc) => setFormValue({ ...formValue, description: desc })}
      />
      <MultipleSelect
        name="labels"
        label="tags"
        values={formValue.labels}
        onChange={(labels) => setFormValue({ ...formValue, labels })}
        selectableOptions={["food", "drink", "fun"]}
      />
      <div className="flex-1" />
      <SubmitButton />
    </div>
  );
}
