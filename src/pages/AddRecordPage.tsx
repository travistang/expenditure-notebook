import React from "react";
import { Currency, Form } from "../backend/types";
import AmountInput from "../components/AmountInput";
import CurrencyConfigEntry from "../components/CurrencyConfig/CurrencyConfigEntry";
import Input from "../components/Input";
import MultipleSelect from "../components/MultipleSelect";
import SubmitButton from "../components/SubmitButton";
import UploadModal from "../components/UploadModal";
import { LocalStorageContext } from "../contexts/LocalStorageContext";

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
  const { store } = React.useContext(LocalStorageContext);
  const [uploadFormModalOpened, setUploadFormOpened] = React.useState(false);
  const [formValue, setFormValue] = React.useState<Form>(defaultFormValue);
  const reset = () => setFormValue(defaultFormValue);
  const labelsAddedInStore = store.expenditures.reduce<string[]>(
    (labels, expenditure) =>
      Array.from(new Set([...labels, ...expenditure.labels])),
    []
  );

  return (
    <div className="flex-1 vertical overflow-hidden">
      <UploadModal
        opened={uploadFormModalOpened}
        onClose={() => setUploadFormOpened(false)}
      />
      <AmountInput
        currency={formValue.currencyConfig.currency}
        value={formValue.amount}
        onChange={(newValue) =>
          setFormValue({ ...formValue, amount: newValue })
        }
      />
      <CurrencyConfigEntry
        amount={formValue.amount}
        currencyConfig={formValue.currencyConfig}
        onChangeCurrency={(newConfig) =>
          setFormValue({ ...formValue, currencyConfig: newConfig })
        }
      />
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
        selectableOptions={labelsAddedInStore}
      />
      <div className="flex-1" />
      <SubmitButton
        onSubmit={reset}
        formValue={formValue}
        onOpenUploadModal={() => setUploadFormOpened(true)}
      />
    </div>
  );
}
