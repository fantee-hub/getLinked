import Criteria from "@/src/components/Criteria";
import Faq from "@/src/components/Faq";
import Footer from "@/src/components/Footer.tsx";
import Hero from "@/src/components/Hero";
import Introduction from "@/src/components/Introduction";
import Partners from "@/src/components/Partners";
import Privacy from "@/src/components/Privacy";
import Prizes from "@/src/components/Prizes";
import Rules from "@/src/components/Rules";
import Timeline from "@/src/components/Timeline";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Rules />
      <Criteria />
      <Faq />
      <Timeline />
      <Prizes />
      <Partners />
      <Privacy />
      <Footer />
    </main>
  );
}
