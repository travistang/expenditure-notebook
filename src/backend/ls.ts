import { DB, DEFAULT_DB_VALUE } from "./types";

const LS_STORAGE_KEY = "ls/expenditure";

export const saveData = (data: object) => {
  localStorage.setItem(LS_STORAGE_KEY, JSON.stringify(data));
};

export const getData = <T>(key?: string): T | null => {
  try {
    const data: DB =
      JSON.parse(localStorage.getItem(LS_STORAGE_KEY) || "") ||
      DEFAULT_DB_VALUE;
    return key
      ? key.split(".").reduce<any>((result, keyPart) => result?.[keyPart], data)
      : data;
  } catch {
    return null;
  }
};
