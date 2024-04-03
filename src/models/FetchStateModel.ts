export type FetchState<T> =
  | {
      status: "Initial";
    }
  | {
      status: "Loading";
    }
  | {
      status: "Success";
      data: T;
    }
  | { status: "Failed"; error: string };

export type Status = "Initial" | "Loading" | "Success" | "Failed";
