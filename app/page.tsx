import Criteria from "@/src/components/Criteria";
import Faq from "@/src/components/Faq";
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
      <Faq />
    </main>
  );
}
