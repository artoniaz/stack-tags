import { createSlice } from "@reduxjs/toolkit";
import tagsActions from "./tagsActions";
import { FetchState } from "../../models/FetchStateModel";
import { TagsFetchResponseModel } from "../../models/TagsDataModel";

const initialState: FetchState<TagsFetchResponseModel> = { status: "Initial" };

export const tagsSlice = createSlice({
  name: "tags",
  initialState: initialState as FetchState<TagsFetchResponseModel>,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(tagsActions.getTags.pending, () => {
      return { status: "Loading" };
    });
    builder.addCase(tagsActions.getTags.fulfilled, (_state, action) => {
      return { status: "Success", data: action.payload };
    });
    builder.addCase(tagsActions.getTags.rejected, (_state, action) => {
      return { status: "Failed", error: action.error.message! };
    });
  },
});

export default tagsSlice.reducer;
