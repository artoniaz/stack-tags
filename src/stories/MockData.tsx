import { Provider } from "react-redux";
import { MockstateProps } from "../models/MockstateProps";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { FetchState } from "../models/FetchStateModel";
import { TagsFetchResponseModel } from "../models/TagsDataModel";

const Mockstore = ({ state, children }: MockstateProps) => (
  <Provider
    store={configureStore({
      reducer: {
        tags: createSlice({
          name: "tags",
          initialState: state,
          reducers: {},
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

export default Mockstore;

export const MocedState: FetchState<TagsFetchResponseModel> = {
  status: "Initial",
};
