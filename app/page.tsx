import Hero from "@/src/components/Hero";
import Introduction from "@/src/components/Introduction";
import Nav from "@/src/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
    </main>
  );
}
