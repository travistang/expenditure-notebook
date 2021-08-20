import React from "react";
import { getData, saveData } from "../backend/ls";
import { DB, DEFAULT_DB_VALUE, Expenditure } from "../backend/types";

export type LocalStorageContextType = {
  store: DB;
  addExpenditure: (expenditure: Expenditure) => void;
};
export const LocalStorageContext = React.createContext<LocalStorageContextType>(
  { store: DEFAULT_DB_VALUE, addExpenditure: (_) => {} }
);

type Props = {
  children: React.ReactNode;
};
export default function LocalStorageContextProvider({ children }: Props) {
  const db: DB = getData() || { expenditures: [] };
  const [store, setStore] = React.useState<DB>(db);

  React.useEffect(() => {
    if (store) {
      saveData(store);
    }
  }, [store]);
  const addExpenditure = (expenditure: Expenditure) => {
    setStore({
      ...store,
      expenditures: [...store.expenditures, expenditure],
    });
  };

  const contextValue = {
    store,
    addExpenditure,
  };
  return (
    <LocalStorageContext.Provider value={contextValue}>
      {children}
    </LocalStorageContext.Provider>
  );
}
