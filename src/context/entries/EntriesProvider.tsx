import { Entrie, EntrieState, Status } from "@/types";
import { FC, ReactNode, useEffect, useReducer } from "react";

import { EntriesContext, EntrieReducer } from "./";

const UI_INITIAL_STATE: EntrieState = {
  entries: [],
};

type Props = {
  children?: ReactNode;
};

export const EntrieProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(EntrieReducer, UI_INITIAL_STATE);

  const addEntrie = async ({ description, title }: Entrie) => {
    const req = await fetch("/api/entries", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, title }),
    });
    const entry: Entrie = await req.json();

    dispatch({ type: "ENTRIE-ADD", payload: entry });
  };

  const updateEntrie = async ({
    description,
    _id,
    title,
    status,
  }: Entrie) => {
    const req = await fetch(`/api/entries/${_id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, title, status }),
    });
    const entry: Entrie = await req.json();

    dispatch({ type: "ENTRIE-UPDATE", payload: entry });
  };

  const removeEntrie = () => {
    dispatch({ type: "ENTRIE-REMOVE" });
  };

  const refreshEntries = async () => {
    const req = await fetch("/api/entries");
    const entries: Entrie[] = await req.json();
    dispatch({ type: "ENTRIE-REFRESH", payload: entries });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addEntrie,
        removeEntrie,
        updateEntrie,
        refreshEntries,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
