import { ExpenditureCategory, Form } from "../../../backend/types";
import { Modifier } from "../../../utils/types";

export default function useUpdateFormValue(
  formValue: Form,
  setFormValue: (form: Form) => void
) {
  const setValue: Modifier<Form> = (field) => (value) => {
    switch (field) {
      case "category":
        if (value === ExpenditureCategory.Groceries) {
          setFormValue({
            ...formValue,
            description: "Groceries",
            labels: ["groceries", "food"],
            category: ExpenditureCategory.Groceries,
          });
          break;
        }
        setFormValue({ ...formValue, category: value as ExpenditureCategory });
        break;
      default:
        setFormValue({ ...formValue, [field]: value });
    }
  };
  return setValue;
}
