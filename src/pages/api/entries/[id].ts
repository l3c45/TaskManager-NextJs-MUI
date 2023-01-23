import { connectDB, disconnectDB, Entrie, IEntrie } from "@/database";
import mongoose from "mongoose";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | IEntrie[] | IEntrie | null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "PUT":
      return updateEntrie(req, res);
    case "GET":
      return getEntry(req, res);
    case "DELETE":
      return deleteEntry(req, res);

    default:
      res.status(400).json({ message: "El metodo solicitado no es correcto" });
  }
}

const updateEntrie = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    res.status(400).json({ message: "ID invalido" });
  }

  await connectDB();

  const entryWithId = await Entrie.findById(id);

  const {
    description = entryWithId?.description,
    title = entryWithId?.title,
    status = entryWithId?.status,
  } = req.body;

  const updatedEntry = await Entrie.findByIdAndUpdate(
    id,
    { description, title, status },
    { runValidators: true, new: true }
  );

  res.status(200).json(updatedEntry);

  await disconnectDB();
};

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await connectDB();
  const entrie = await Entrie.findById(id);
  await disconnectDB();

  res.status(200).json(entrie);
};

const deleteEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await connectDB();
  const entrie = await Entrie.findByIdAndRemove(id);
  console.log(entrie, "borrasa");
  await disconnectDB();

  res.status(200).json(entrie);
};
