import { FormInputs } from "./components/FormNewEntry";

export interface UIContextProps {
  slideMenu: boolean;
  formIsOpen: boolean;
  isDragging: boolean;
  loadingEntry:string;
  theme:string;
  startDragging: () => void;
  endDragging: () => void;
  openSlide: () => void;
  closeSlide: () => void;
  openForm: () => void;
  closeForm: () => void;
  loadingToEntry: (id: string) => void;
  toggleTheme: (theme: string) => void
}

export interface UIstate {
  slideMenu: boolean;
  formIsOpen: boolean;
  isDragging: boolean;
  loadingEntry:string;
  theme:string;
}

export interface EntriesContextProps {
  entries: Entry[];
  loading:boolean
  addEntrie: (entrie: FormInputs) => void;
  updateEntrie: (entrie: Entry) => void;
  removeEntrie: (id:string) =>Promise<void> ;
  refreshEntries: () => Promise<void>
}

export enum Status {
  pending="pending",
  current="current",
  done="done",
}

export interface Entry {
  _id: string;
  title: string;
  description: string;
  status: Status;
  create: number;
}

export interface EntryState {
  entries: Entry[];
  loading:boolean
}
