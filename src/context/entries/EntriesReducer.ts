import { Entry, EntryState } from "@/types";

type EntrieAction =
  | { type: "ENTRIE-ADD"; payload: Entry }
  | { type: "ENTRIE-REMOVE" }
  | { type: "ENTRIE-UPDATE"; payload: Entry }
  | { type: "ENTRIE-REFRESH"; payload: Entry[] }
  | { type: "ENTRIE-DELETE"; payload: string };

export const EntrieReducer = (
  state: EntryState,
  action: EntrieAction
): EntryState => {
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
        entries: 
        [...state.entries].map((entrie) => {
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
