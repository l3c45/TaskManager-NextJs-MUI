import { UIstate } from "@/types";

type UIAction =
  | {
      type: "UI-Open";
    }
  | { type: "UI-Close" };

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

    default:
      return { ...state };
  }
};
