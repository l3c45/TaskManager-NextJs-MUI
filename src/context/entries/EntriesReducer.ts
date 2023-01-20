import { EntrieState } from "@/types";

type EntrieAction =
  | {
      type: "ENTRIE-ADD";
    }
  | { type: "ENTRIE-REMOVE" };

export const EntrieReducer = (
  state: EntrieState,
  action: EntrieAction
): EntrieState => {
  switch (action.type) {
    case "ENTRIE-ADD":
      return {
        ...state,
      };

    case "ENTRIE-REMOVE":
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};
