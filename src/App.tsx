import React from "react";
import AmountInput from "./components/AmountInput";
import Header from "./components/Header";

import "./App.css";
import Input from "./components/Input";
import SubmitButton from "./components/SubmitButton";
import MultipleSelect from "./components/MultipleSelect";
import LocalStorageContextProvider, {
  LocalStorageContext,
} from "./contexts/LocalStorageContext";
import { PageList } from "./pageList";
import toast, { Toaster } from "react-hot-toast";
import RecordListPage from "./pages/RecordListPage";

type Form = {
  amount: number;
  description: string;
  labels: string[];
};

const defaultFormValue: Form = {
  amount: 0,
  description: "",
  labels: [],
};
function App() {
  const [page, setPage] = React.useState<PageList>(PageList.HOME_PAGE);
  const { addExpenditure, store } = React.useContext(LocalStorageContext);
  const [formValue, setFormValue] = React.useState<Form>(defaultFormValue);

  const labelsAddedInStore = store.expenditures.reduce<string[]>(
    (labels, expenditure) =>
      Array.from(new Set([...labels, ...expenditure.labels])),
    []
  );

  const saveForm = () => {
    if (formValue.amount <= 0 || !formValue.description) {
      toast.error("missing description or amount is invalid.");
      return;
    }
    addExpenditure({
      ...formValue,
      amount: formValue.amount / 100,
      date: new Date(),
      id: `${new Date().getTime()}-${Math.random().toString().split(".")[1]}`,
    });
    setFormValue(defaultFormValue);
    toast.success("Expenditure logged!");
  };

  return (
    <div className="absolute vertical inset-0 flex p-4 bg-primary-500">
      <Toaster />
      <Header currentPage={page} goPage={setPage} />
      {page === PageList.HOME_PAGE && (
        <>
          <AmountInput
            value={formValue.amount}
            onChange={(newValue) =>
              setFormValue({ ...formValue, amount: newValue })
            }
          />
          <Input
            name="description"
            label="description"
            value={formValue.description}
            onChange={(desc) =>
              setFormValue({ ...formValue, description: desc })
            }
          />
          <MultipleSelect
            name="labels"
            label="tags"
            values={formValue.labels}
            onChange={(labels) => setFormValue({ ...formValue, labels })}
            selectableOptions={labelsAddedInStore}
          />
          <div className="flex-1" />
          <SubmitButton onSubmit={saveForm} />
        </>
      )}
      {page === PageList.RECORD_LIST_PAGE && <RecordListPage />}
    </div>
  );
}

export default function AppWithContexts() {
  return (
    <LocalStorageContextProvider>
      <App />
    </LocalStorageContextProvider>
  );
}
