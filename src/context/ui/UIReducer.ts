import { UIstate } from "@/types";

type UIAction =
  | {type: "UI-Open";}
  | { type: "UI-Close" }
  | { type: "UI-Form-Open" }
  | { type: "UI-Form-Close" };

export const UIReducer = (state: UIstate, action: UIAction): UIstate => {
  switch (action.type) {
    case "UI-Open":
      return {
        ...state,
        slideMenu: true,
      };

    case "UI-Close":
      return {
        ...state,
        slideMenu: false,
      };
    case "UI-Form-Open":
      return {
        ...state,
        formIsOpen: true,
      };
    case "UI-Form-Close":
      return {
        ...state,
        formIsOpen: false,
      };

    default:
      return { ...state };
  }
};
