import React from "react";
import { Currency, Form } from "../backend/types";
import AmountInput from "../components/AmountInput";
import CurrencyConfigEntry from "../components/CurrencyConfig/CurrencyConfigEntry";
import ExpenditureCategorySelect from "../components/ExpenditureCategorySelect";
import Input from "../components/Input";
import useUpdateFormValue from "../components/Modals/EditModal/useUpdateFormValue";
import MultipleSelect from "../components/MultipleSelect";
import Section from "../components/Section";
import SubmitButton from "../components/SubmitButton";
import UploadModal from "../components/UploadModal";

const defaultFormValue: Form = {
  amount: 0,
  description: "",
  labels: [],
  currencyConfig: {
    currency: Currency.EUR,
    exchangeRate: 1,
  },
};

export default function AddRecordPage() {
  const [uploadFormModalOpened, setUploadFormOpened] = React.useState(false);
  const [formValue, setFormValue] = React.useState<Form>(defaultFormValue);
  const reset = () => setFormValue(defaultFormValue);
  const setValue = useUpdateFormValue(formValue, setFormValue);
  return (
    <div className="flex-shrink-0 flex-1 vertical overflow-y-auto">
      <UploadModal
        opened={uploadFormModalOpened}
        onClose={() => setUploadFormOpened(false)}
      />
      <AmountInput
        currency={formValue.currencyConfig.currency}
        value={formValue.amount}
        onChange={(newValue) =>
          setFormValue({ ...formValue, amount: newValue ?? 0 })
        }
        className="sticky top-0"
      />
      <CurrencyConfigEntry
        amount={formValue.amount}
        currencyConfig={formValue.currencyConfig}
        onChangeCurrency={(newConfig) =>
          setFormValue({ ...formValue, currencyConfig: newConfig })
        }
      />
      <Section collapsible title="Category" className="bg-background-secondary">
        <ExpenditureCategorySelect
          category={formValue.category}
          onSelect={setValue("category")}
        />
      </Section>
      <div className="flex-1" />
      <Input
        name="description"
        label="description"
        value={formValue.description}
        onChange={setValue("description")}
      />
      <MultipleSelect
        name="labels"
        label="tags"
        values={formValue.labels}
        onChange={setValue("labels")}
        selectableOptions={[]}
      />
      <div className="flex-1" />
      <SubmitButton onSubmit={reset} formValue={formValue} />
    </div>
  );
}
