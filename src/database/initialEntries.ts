import { Status } from "@/types";



export const initialEntries = [
  {
    title: "currenttest",
    description: "loresdsfdfdfd fd fdfdfdfdfd fd d gfd hhg hgkjh jg gg jj ",
    status: Status.current,
    create: Date.now(),
  },
  {
    title: "donetest",
    description: "doneloresdsfdfdfd fd fdfdfdfdfd fd d gfd hhg hgkjh jg gg jj ",
    status: Status.done,
    create: Date.now(),
  },
  {
    title: "pendingtest",
    description: "loresdsfdfdfd fd fdfdfdfdfd fd d gfd hhg hgkjh jg gg jj ",
    status: Status.pending,
    create: Date.now(),
  },
];
