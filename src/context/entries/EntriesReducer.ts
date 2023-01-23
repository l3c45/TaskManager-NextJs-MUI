import { Entrie, EntrieState } from "@/types";

type EntrieAction =
  | { type: "ENTRIE-ADD"; payload: Entrie }
  | { type: "ENTRIE-REMOVE" }
  | { type: "ENTRIE-UPDATE"; payload: Entrie }
  | { type: "ENTRIE-REFRESH"; payload: Entrie[] }
  | { type: "ENTRIE-DELETE"; payload: string };

export const EntrieReducer = (
  state: EntrieState,
  action: EntrieAction
): EntrieState => {
  switch (action.type) {
    case "ENTRIE-ADD":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    case "ENTRIE-REMOVE":
      return {
        ...state,
      };
    case "ENTRIE-UPDATE":
      return {
        ...state,
        entries: [...state.entries].map((entrie) => {
          if (entrie._id === action.payload._id) {
            entrie.status = action.payload.status;
            return entrie;
          }
          return entrie;
        }),
      };
    case "ENTRIE-REFRESH":
      return {
        ...state,
        entries: [...action.payload],
      };
    case "ENTRIE-DELETE":
      const entries = [...state.entries].filter(
        (entry) => entry._id != action.payload
      );

      return {
        ...state,
        entries: entries,
      };

    default:
      return { ...state };
  }
};
