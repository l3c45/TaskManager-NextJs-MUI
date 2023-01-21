import { connectDB, disconnectDB, Entrie, IEntrie } from "@/database";


import type { NextApiRequest, NextApiResponse } from "next";

type Data = 
|{message: string;}
|IEntrie[]
|IEntrie

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

switch (req.method) {
  case "GET":
    return  getEntries(res)

    case "POST":
      return  saveOneEntry(req,res)
  

  default:
    res.status(400).json({ message: "El metodo solicitado no es correcto" });
}



}


const getEntries=async (res:NextApiResponse<Data>)=>{

  await connectDB();
  const entries = await Entrie.find().sort({ createdat: -1 });
  await disconnectDB();

  res.status(200).json(entries);

}

const saveOneEntry=async (req:NextApiRequest,res:NextApiResponse<Data>)=>{


  const {description="",title=""}=req.body

  await connectDB();
  const entrie = new Entrie({
    description,
    title,
    create:Date.now(),
    status:"pending"
  })

  entrie.save()


  await disconnectDB();

  res.status(201).json(entrie);

}