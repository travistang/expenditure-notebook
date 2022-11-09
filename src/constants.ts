import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendar,
  faCogs,
  faHome,
  faRunning,
  faShoppingBag,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { ExpenditureCategory } from "./backend/types";

export const ExpenditureCategoryIconProps: Record<
  ExpenditureCategory,
  IconProp
> = {
  [ExpenditureCategory.Groceries]: faShoppingBag,
  [ExpenditureCategory.Housing]: faHome,
  [ExpenditureCategory.OutgoingExpenditure]: faRunning,
  [ExpenditureCategory.Utilities]: faCogs,
  [ExpenditureCategory.Leisure]: faUmbrellaBeach,
  [ExpenditureCategory.RegularCosts]: faCalendar,
};
