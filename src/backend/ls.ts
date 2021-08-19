const LS_STORAGE_KEY = "ls/expenditure";

export const saveData = (data: object) => {
  localStorage.setItem(LS_STORAGE_KEY, JSON.stringify(data));
};

export const getData = (key?: string): object | undefined | null => {
  const data: any = JSON.parse(localStorage.getItem(LS_STORAGE_KEY) || "");
  return key
    ? key.split(".").reduce<any>((result, keyPart) => result?.[keyPart], data)
    : data;
};
