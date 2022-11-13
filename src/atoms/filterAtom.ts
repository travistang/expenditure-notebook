import { atom } from "recoil";
import { ExpenditureFilter } from "../domain/Expenditure";

export const filterAtom = atom<ExpenditureFilter>({
  key: 'filter',
  default: {},
});
