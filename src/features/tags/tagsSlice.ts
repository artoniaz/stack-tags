import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../utils/stateStatus";
import tagsActions from "./tagsActions";
import InitialState from "../../models/InitStateModel";
import { TagsDataModel } from "../../models/TagsDataModel";

const initialState: InitialState<TagsDataModel> = {
  data: {
    items: [],
    hasMore: false,
  },
  status: Status.Initial,
  error: null,
};

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(tagsActions.getTags.pending, (state) => {
      state.status = Status.Loading;
    });
    builder.addCase(tagsActions.getTags.fulfilled, (state, action) => {
      state.status = Status.Success;
      state.data = action.payload;
    });
    builder.addCase(tagsActions.getTags.rejected, (state, action) => {
      state.status = Status.Failed;
      state.error = action.error.message!;
    });
  },
});

export default tagsSlice.reducer;
