import { Status } from "../utils/stateStatus";

export default interface InitialState<T> {
  data: T;
  status: Status;
  error: string | null;
}
