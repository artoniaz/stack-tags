import GetTagsQueryModel from "../../models/GetTagsQueryModel";
import { TagsFetchResponseModel } from "../../models/TagsDataModel";
import { mapResponseTagDataToTagModel } from "../../utils/mapResponseTagDataToTagModel";

const BASE_URL = "https://api.stackexchange.com";
const API_URL = `${BASE_URL}/2.3/tags`;
const tagsService = {
  getTags: async (getTagsQuery: GetTagsQueryModel): Promise<TagsFetchResponseModel> => {
    const response = await fetch(
      `${API_URL}?page=${getTagsQuery.page}&pagesize=${getTagsQuery.pageSize}&order=${getTagsQuery.order}&sort=${getTagsQuery.sort}&site=stackoverflow`
    );
    
    if (!response.ok) {
      throw Error("Error fetching stack tags data");
    }
    const tagsData = await response.json();

    return mapResponseTagDataToTagModel(tagsData);
  },
};

export default tagsService;
