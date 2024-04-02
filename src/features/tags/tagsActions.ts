import { createAsyncThunk } from "@reduxjs/toolkit";
import tagsService from "./tagsService";
import getTagsQueryModel from "../../models/GetTagsQueryModel";

const tagsActions = {
  getTags: createAsyncThunk(
    "tags/getTags",
    async (getTagsQuery: getTagsQueryModel) => {
      const tags = await tagsService.getTags(getTagsQuery);
      return tags;
    }
  ),
};

export default tagsActions;