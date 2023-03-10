
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string|string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {message="bad request"}=req.query

  res.status(400).json({ message});
}
