import { Entrie, EntrieState, Status } from "@/types";
import { FC, ReactNode, useEffect, useReducer } from "react";

import { EntriesContext, EntrieReducer } from "./";
import { useSnackbar } from "notistack";

const UI_INITIAL_STATE: EntrieState = {
  entries: [],
};

type Props = {
  children?: ReactNode;
};

export const EntrieProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(EntrieReducer, UI_INITIAL_STATE);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

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

  const updateEntrie = async ({ description, _id, title, status }: Entrie) => {
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
    enqueueSnackbar("Actualizado", {
      variant: "success",
      autoHideDuration: 1000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  const removeEntrie = async (id: string) => {
    const req = await fetch(`/api/entries/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const entryDeleted: Entrie = await req.json();

    dispatch({ type: "ENTRIE-DELETE", payload: entryDeleted._id });

    enqueueSnackbar("Tarea Borrada", {
      variant: "success",
      autoHideDuration: 1000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
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
