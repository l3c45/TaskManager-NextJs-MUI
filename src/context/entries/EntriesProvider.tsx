import { Entry, EntryState } from "@/types";
import { FC, ReactNode, useEffect, useReducer } from "react";
import { EntriesContext, EntrieReducer } from "./";
import { useSnackbar } from "notistack";
import { FormInputs } from "@/components/FormNewEntry";

const UI_INITIAL_STATE: EntryState = {
  entries: [],
};

type Props = {
  children?: ReactNode;
};

export const EntrieProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(EntrieReducer, UI_INITIAL_STATE);

  const { enqueueSnackbar } = useSnackbar();

  const addEntrie = async ({ description }: FormInputs) => {
    const req = await fetch("/api/entries", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description }),
    });
    const entry: Entry = await req.json();

    dispatch({ type: "ENTRIE-ADD", payload: entry });
  };

  const updateEntrie = async ({ description, _id,  status }: Entry) => {
    const req = await fetch(`/api/entries/${_id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description,  status }),
    });
    const entry: Entry = await req.json();
  

    dispatch({ type: "ENTRIE-UPDATE", payload: entry });
    
    enqueueSnackbar("Tarea actualizada", {
      variant: "success",
      autoHideDuration: 1000,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
    });

    refreshEntries()
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

    const entryDeleted: Entry = await req.json();

    dispatch({ type: "ENTRIE-DELETE", payload: entryDeleted._id });

    enqueueSnackbar("Tarea Borrada", {
      variant: "success",
      autoHideDuration: 1000,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
    });
  };

  const refreshEntries = async () => {
    const req = await fetch("/api/entries");
    const entries: Entry[] = await req.json();
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
