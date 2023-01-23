import { Status } from "@/types";



export const initialEntries = [
  {
    title: "Esta es una tarea pendiente",
    description: "loresdsfdfdfd fd fdfdfdfdfd fd d gfd hhg hgkjh jg gg jj ",
    status: Status.pending,
    create: Date.now(),
  },
  {
    title: "Esta es una tarea en curso",
    description: "doneloresdsfdfdfd fd fdfdfdfdfd fd d gfd hhg hgkjh jg gg jj ",
    status: Status.current,
    create: Date.now(),
  },
  {
    title: "Esta es una tarea finalizada",
    description: "loresdsfdfdfd fd fdfdfdfdfd fd d gfd hhg hgkjh jg gg jj ",
    status: Status.done,
    create: Date.now(),
  },
];
