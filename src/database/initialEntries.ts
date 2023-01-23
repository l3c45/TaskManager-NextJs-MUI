import { Status } from "@/types";

export const initialEntries = [
  {
    description: "Esta es una tarea pendiente",
    status: Status.pending,
    create: Date.now(),
  },
  {
    description: "Esta es una tarea en curso",
    status: Status.current,
    create: Date.now(),
  },
  {
    description: "Esta es una tarea finalizada",
    status: Status.done,
    create: Date.now(),
  },
];
