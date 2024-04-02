import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tagsSlice from "./tags/tagsSlice";

const combinedReducers = combineReducers({
    tags: tagsSlice,
});

 const rootReducer = (state: any, action: any) => {
  return combinedReducers(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
