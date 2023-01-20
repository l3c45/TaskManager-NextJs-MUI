import { Add } from "./context/entries";

export interface ContextProps {
  slideMenu: boolean;
  openSlide: () => void;
  closeSlide: () => void;
}

export interface UIstate {
  slideMenu: boolean;
}

export interface EntriesContextProps {
  entries:Entrie[]
  addEntrie: ({ title, description }:Add) => void
  removeEntrie: () => void
}
export enum Status {
  pending,
  current,
  done
}

export interface Entrie {
  id: string
  title:string
  description:string
  status:Status
  create:number
}


export interface EntrieState{
  entries:Entrie[]
}