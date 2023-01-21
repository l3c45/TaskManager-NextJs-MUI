

export interface ContextProps {
  slideMenu: boolean;
  formIsOpen: boolean;
  isDragging: boolean;
  startDragging: () => void;
  endDragging: () => void;
  openSlide: () => void;
  closeSlide: () => void;
  openForm: () => void;
  closeForm: () => void;
}

export interface UIstate {
  slideMenu: boolean;
  formIsOpen: boolean;
  isDragging: boolean;
}

export interface EntriesContextProps {
  entries: Entrie[];
  addEntrie: (entrie: Entrie) => void;
  updateEntrie: (entrie: Entrie) => void;
  removeEntrie: () => void;
  refreshEntries: () => Promise<void>
}
export enum Status {
  pending="pending",
  current="current",
  done="done",
}

export interface Entrie {
  _id: string;
  title: string;
  description: string;
  status: Status;
  create: number;
}

export interface EntrieState {
  entries: Entrie[];
}
