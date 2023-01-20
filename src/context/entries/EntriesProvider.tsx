
import { EntrieState, Status } from "@/types";
import { FC, ReactNode, useReducer } from "react";

import { EntriesContext,EntrieReducer  } from "./";

const UI_INITIAL_STATE: EntrieState = {
  entries:[{
    id:crypto.randomUUID,
  title:"test",
  description:"loresdsfdfdfd fd fdfdfdfdfd fd d gfd hhg hgkjh jg gg jj ",
  status:Status.current,
  create:Date.now(),
  },
  {
    id:crypto.randomUUID,
  title:"test",
  description:"loresdsfdfdfd fd fdfdfdfdfd fd d gfd hhg hgkjh jg gg jj ",
  status:Status.done,
  create:Date.now(),
  },
  {
    id:crypto.randomUUID,
  title:"test",
  description:"loresdsfdfdfd fd fdfdfdfdfd fd d gfd hhg hgkjh jg gg jj ",
  status:Status.pending,
  create:Date.now()-2000000,
  }]
};

type Props = {
  children?: ReactNode;
};

export const EntrieProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(EntrieReducer, UI_INITIAL_STATE);

  const addEntrie = () => {
    dispatch({type:"ENTRIE-ADD"});
  };

  const removeEntrie = () => {
    dispatch({type:"ENTRIE-REMOVE"});
  };

  return (
    <EntriesContext.Provider value={{ ...state, addEntrie, removeEntrie }}>
      {children}
    </EntriesContext.Provider>
  );
};
