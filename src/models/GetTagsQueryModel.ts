export type Order = "asc" | "desc";
export type SortCategory = 'popular' | 'activity' | 'name';

export default interface GetTagsQueryModel {
  page: number;
  pageSize: number;
  order: Order;
  sort: SortCategory;
}
