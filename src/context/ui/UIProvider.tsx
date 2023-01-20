import { UIstate } from "@/types";
import { FC, ReactNode, useReducer } from "react";
import { UIContext, UIReducer } from "./";

const UI_INITIAL_STATE: UIstate = {
  slideMenu: false,
  formIsOpen:false
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

  return (
    <UIContext.Provider value={{ ...state, openSlide, closeSlide,openForm,closeForm }}>
      {children}
    </UIContext.Provider>
  );
};
