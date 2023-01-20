import { Roboto } from "@next/font/google";
import Entries from "@/components/ui/Entries";


const roboto = Roboto({ weight: "400" });

export default function Home() {
  return (
    <main style={{ padding: "2rem" }} className={`${roboto.className}`}>
      <Entries></Entries>
    </main>
  );
}
