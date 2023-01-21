import { Entrie, EntrieState, Status } from "@/types";
import { FC, ReactNode, useReducer } from "react";
import { v4 } from "uuid";

import { EntriesContext, EntrieReducer } from "./";

const UI_INITIAL_STATE: EntrieState = {
  entries: [],
};

type Props = {
  children?: ReactNode;
};

export type Add = {
  title: string;
  description: string;
};

export const EntrieProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(EntrieReducer, UI_INITIAL_STATE);

  const addEntrie = ({ title, description }: Add) => {
    const newEntrie = {
      id: v4(),
      title,
      description,
      status: Status.pending,
      create: Date.now(),
    };
    dispatch({ type: "ENTRIE-ADD", payload: newEntrie });
  };

  const updateEntrie = (entrie :Entrie) => {
    dispatch({ type: "ENTRIE-UPDATE", payload: entrie });
  };

  const removeEntrie = () => {
    dispatch({ type: "ENTRIE-REMOVE" });
  };

  return (
    <EntriesContext.Provider
      value={{ ...state, addEntrie, removeEntrie, updateEntrie }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
