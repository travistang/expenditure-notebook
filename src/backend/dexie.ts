import { isAfter } from "date-fns";
import Dexie, { Table } from "dexie";
import { hasEvery } from "../utils/Array";
import { caseInsensitiveInclude } from "../utils/String";
import { LS_STORAGE_KEY } from "./ls";
import { RepositoryBase } from "./RepositoryBase";
import { Expenditure } from "./types";

class DexieRepository extends Dexie implements RepositoryBase<Expenditure> {
  expenditures!: Table<Expenditure>;

  constructor() {
    super("ExpenditureDatabase");
    this.version(1).stores({
      expenditures: "++id,description,amount,labels,date,category",
    });
  }

  async migrateFromLS(): Promise<boolean> {
    const lsItems = localStorage.getItem(LS_STORAGE_KEY);
    if (!lsItems) {
      return false;
    }
    try {
      const allItems = JSON.parse(lsItems) as Expenditure[];
      this.expenditures.bulkAdd(allItems);
      localStorage.removeItem(LS_STORAGE_KEY);
      return true;
    } catch {
      return false;
    }
  }

  async getData(key?: string): Promise<Expenditure | null> {
    return (await this.expenditures.get(key ?? "")) ?? null;
  }

  async getExpenditureByPage(paginationConfig?: { pageSize?: number, page?: number }) {
    const { page = 0, pageSize = 25 } = paginationConfig ?? {};
    return this.expenditures
      .orderBy("date")
      .reverse()
      .offset(pageSize * page)
      .limit(pageSize)
      .toArray();
  }

  async add(data: Omit<Expenditure, "id">) {
    const newItemId = window.crypto.randomUUID();
    await this.expenditures.add({
      ...data,
      id: newItemId,
    });

    return newItemId;
  }

  async remove(id: string) {
    return this.expenditures.delete(id);
  }

  async edit(id: string, data: Omit<Expenditure, "id">) {
    await this.expenditures.update(id, data);
  }

  async search(searchData: Partial<Expenditure>) {
    return this.expenditures
      .filter((expenditure) => {
        if (
          searchData.description &&
          !caseInsensitiveInclude(
            expenditure.description,
            searchData.description
          )
        ) {
          return false;
        }
        if (
          !!searchData.labels?.length &&
          !hasEvery(searchData.labels, expenditure.labels)
        ) {
          return false;
        }

        if (searchData.date && !isAfter(searchData.date, expenditure.date)) {
          return false;
        }
        return true;
      })
      .toArray();
  }
}

export default new DexieRepository();
