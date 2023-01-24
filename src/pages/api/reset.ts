import { connectDB, disconnectDB, MEntry } from "@/database";
import { initialEntries } from "@/database/initialEntries";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // if (process.env.NODE_ENV === "production") {
  //   return res
  //     .status(400)
  //     .json({ message: "Accion no permitida desde produccion" });
  // }
  
    await connectDB();
    await MEntry.deleteMany();
    await MEntry.insertMany(initialEntries);
    await disconnectDB();
    res.status(201).json({ message: "Añadidos" });
  
}
