import { UIstate } from "@/types";
import { FC, ReactNode, useReducer } from "react";
import { UIContext, UIReducer } from "./";

const UI_INITIAL_STATE: UIstate = {
  slideMenu: false,
  formIsOpen: false,
  isDragging: false,
  loadingEntry: "",
  theme: "dark",
};

type Props = {
  children?: ReactNode;
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const openSlide = () => {
    dispatch({ type: "UI-Open" });
  };

  const closeSlide = () => {
    dispatch({ type: "UI-Close" });
  };

  const openForm = () => {
    dispatch({ type: "UI-Form-Open" });
  };

  const closeForm = () => {
    dispatch({ type: "UI-Form-Close" });
  };

  const startDragging = () => {
    dispatch({ type: "UI-Start-Dragging" });
  };
  const endDragging = () => {
    dispatch({ type: "UI-End-Dragging" });
  };
  const loadingToEntry = (id: string) => {
    dispatch({ type: "UI-Entry-Loading", payload: id });
  };

  const toggleTheme = (theme: string) => {
    dispatch({ type: "UI-Theme", payload: theme });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        toggleTheme,
        loadingToEntry,
        openSlide,
        closeSlide,
        openForm,
        closeForm,
        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
