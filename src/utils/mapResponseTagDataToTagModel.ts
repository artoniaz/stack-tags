import { TagsFetchResponseModel } from "../models/TagsDataModel";

export const mapResponseTagDataToTagModel = (tagsData: any) => {
  const tags: TagsFetchResponseModel = {
    items: tagsData["items"] ?? [],
    hasMore: tagsData["has_more"] ?? false,
  };
  return tags;
};
