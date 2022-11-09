type CreateEditProps<T extends { id: string; }> = Omit<T, "id">;

export interface RepositoryBase<T extends { id: string }> {
  getData(key?: string): Promise<T | null>;
  search(data: Partial<T>): Promise<T[]>;
  add(data: CreateEditProps<T>): Promise<string>;
  remove(id: string): Promise<void>;
  edit(id: string, data: CreateEditProps<T>): Promise<void>;
}