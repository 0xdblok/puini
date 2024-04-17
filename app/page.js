import Image from "next/image";
import Footer from "./component/footer";

import Hero from "./component/hero";
import Life from "./component/life";
import Tokenomics from "./component/tokenomics";

export default function Home() {
  return (
    <main className="bg-[#F5E6E8] px-4 md:px-16 lg:px-32">
      <Hero />
      <Life />
      <Tokenomics />
      <Footer />
    </main>
  );
}
