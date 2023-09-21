import Criteria from "@/src/components/Criteria";
import Hero from "@/src/components/Hero";
import Introduction from "@/src/components/Introduction";
import Rules from "@/src/components/Rules";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Rules />
      <Criteria />
    </main>
  );
}
