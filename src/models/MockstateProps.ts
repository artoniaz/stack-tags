import { FetchState } from "./FetchStateModel";
import { TagsFetchResponseModel } from "./TagsDataModel";

export interface MockstateProps {
  state: FetchState<TagsFetchResponseModel>;
  children: JSX.Element;
}
