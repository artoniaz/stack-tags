import { TagsDataModel } from "../models/TagsDataModel";

export const mapResponseTagDataToTagModel = (tagsData: any) => {
  const tags: TagsDataModel = {
    items: tagsData["items"],
    hasMore: tagsData["has_more"],
  };
  return tags;
};
