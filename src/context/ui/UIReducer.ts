import { UIstate } from "@/types";

type UIAction =
  | {type: "UI-Open";}
  | { type: "UI-Close" }
  | { type: "UI-Form-Open" }
  | { type: "UI-Form-Close" }
  | { type: "UI-Start-Dragging" }
  | { type: "UI-End-Dragging" }

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
      case "UI-Start-Dragging":
        return {
          ...state,
          isDragging: true,
        };
        case "UI-End-Dragging":
          return {
            ...state,
            isDragging: false,
          };

    default:
      return { ...state };
  }
};
