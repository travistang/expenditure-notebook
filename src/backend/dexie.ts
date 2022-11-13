import Dexie, { Table } from "dexie";
import { ExpenditureFilter } from "../domain/Expenditure";
import { expenditureMatchesFilter } from "../domain/Filter";
import { LS_STORAGE_KEY } from "./ls";
import { RepositoryBase } from "./RepositoryBase";
import { Expenditure, PaginationConfig } from "./types";

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

  async getExpenditureByPage(
    filter: ExpenditureFilter,
    paginationConfig?: Partial<PaginationConfig>
  ) {
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
    await this.expenditures.delete(id);
    return true;
  }

  async edit(id: string, data: Omit<Expenditure, "id">) {
    return !!(await this.expenditures.update(id, data));
  }

  async search(
    filter: ExpenditureFilter,
    paginationConfig?: Partial<PaginationConfig>
  ) {
    const { page = 0, pageSize = 25 } = paginationConfig ?? {};
    return this.expenditures
      .orderBy("date")
      .filter((expenditure) => expenditureMatchesFilter(expenditure, filter))
      .reverse()
      .offset(pageSize * page)
      .limit(pageSize)
      .toArray();
  }
}

export default new DexieRepository();
