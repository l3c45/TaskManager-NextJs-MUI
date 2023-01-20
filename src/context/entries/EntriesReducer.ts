import { Entrie, EntrieState } from "@/types";

type EntrieAction =
  | { type: "ENTRIE-ADD",payload:Entrie;}
  | { type: "ENTRIE-REMOVE" }
  | { type: "ENTRIE-UPDATE",payload:Entrie }

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
      case "ENTRIE-UPDATE":
      return {
        ...state,
        entries:[...state.entries].map(entrie=>{
          if(entrie.id===action.payload.id){
            entrie.status=action.payload.status
            return entrie
          }
          return entrie
        } )
      };

    default:
      return { ...state };
  }
};
