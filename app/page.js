import Image from "next/image";
import Footer from "./component/footer";

import Hero from "./component/hero";
import Life from "./component/life";
import Tokenomics from "./component/tokenomics";

export default function Home() {
  return (
    <main className="bg-[#F2F0F1] px-8 ">
      <Hero />
      <Life />
      <Tokenomics />
      <Footer />
    </main>
  );
}
