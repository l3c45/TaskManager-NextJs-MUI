import { Inter } from "@next/font/google";
import Entries from "@/components/ui/Entries";


const inter = Inter({ subsets:['latin'] });

export default function Home() {
  return (
    <main style={{ padding: "2rem" }} className={`${inter.className}`}>
      <Entries></Entries>
    </main>
  );
}
