import { api } from "../api";

export const getItemNameByUniqueId = (uniqueId: string) => {
  return api.cache.getNameByUniqueId(uniqueId);
}
export const paginate = <T>(items: Array<T>, page: number, take: number) => {
  const startIndex = (page - 1) * take;
  const endIndex = page * take;
  return items.slice(startIndex, endIndex);
}