import EntrieDetail from "@/components/ui/EntrieDetail";
import { NextPage } from "next";
import { isValidObjectId } from "mongoose";
import { redirect } from "next/navigation";
import { connectDB, disconnectDB, Entrie } from "@/database";
import type { Entrie as Entry } from "@/types";

interface Props {
  params: {
    id: string;
  };
}

const page = async ({ params: { id } }: Props) => {
  if (!isValidObjectId(id)) redirect("/");

  await connectDB();
  const entry: Entry = await Entrie.findById(id).lean();
  await disconnectDB();

  const parsed=JSON.parse(JSON.stringify(entry))

  return <EntrieDetail entry={parsed}></EntrieDetail>;
};

export default page;
