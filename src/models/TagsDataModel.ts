export interface TagModel {
  name: string;
  count: number;
}
export interface TagsFetchResponseModel {
  items: TagModel[];
  hasMore: boolean;
}
