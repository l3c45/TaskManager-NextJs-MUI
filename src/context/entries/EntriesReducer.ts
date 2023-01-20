import { Entrie, EntrieState } from "@/types";

type EntrieAction =
  | {
      type: "ENTRIE-ADD",payload:Entrie;
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
        entries:[...state.entries,action.payload]
      };

    case "ENTRIE-REMOVE":
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};
