import { EntrieState, Status } from "@/types";
import { FC, ReactNode, useReducer } from "react";
import { v4 } from "uuid";

import { EntriesContext, EntrieReducer } from "./";

const UI_INITIAL_STATE: EntrieState = {
  entries: [
    {
      id: v4(),
      title: "currenttest",
      description: "loresdsfdfdfd fd fdfdfdfdfd fd d gfd hhg hgkjh jg gg jj ",
      status: Status.current,
      create: Date.now(),
    },
    {
      id: v4(),
      title: "donetest",
      description:
        "doneloresdsfdfdfd fd fdfdfdfdfd fd d gfd hhg hgkjh jg gg jj ",
      status: Status.done,
      create: Date.now(),
    },
    {
      id: v4(),
      title: "pendingtest",
      description: "loresdsfdfdfd fd fdfdfdfdfd fd d gfd hhg hgkjh jg gg jj ",
      status: Status.pending,
      create: Date.now(),
    },
  ],
};

type Props = {
  children?: ReactNode;
};

export type Add={
  title:string,description:string
}

export const EntrieProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(EntrieReducer, UI_INITIAL_STATE);

  const addEntrie = ({ title, description }:Add) => {
    const newEntrie = {
      id: v4(),
      title,
      description,
      status: Status.pending,
      create: Date.now(),
    };
    dispatch({ type: "ENTRIE-ADD", payload: newEntrie });
  };

  const removeEntrie = () => {
    dispatch({ type: "ENTRIE-REMOVE" });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addEntrie, removeEntrie }}>
      {children}
    </EntriesContext.Provider>
  );
};
