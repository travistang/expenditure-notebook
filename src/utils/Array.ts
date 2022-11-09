export const distinct = <T>(items: T[]): T[] => [...new Set(items)];

export const hasEvery = <T>(searchItems: T[], originalItems: T[]) =>
  searchItems.every((searchItem) => originalItems.includes(searchItem));
