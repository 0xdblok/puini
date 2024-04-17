import React from "react";
import idea from "../asset/idea.png";
import strong from "../asset/strong.png";
import search from "../asset/search.png";
import Image from "next/image";
export default function Life() {
  return (
    <div className="text-black font-serif">
      <h1 className="text-center pt-16 text-xl">Lifestyle</h1>

      <div className="pt-6 flex text-center gap-6 justify-center">
        {" "}
        <div className="w-1/3 text-center">
          <div className="flex justify-center">
            <Image className="" src={strong} alt=" " width={150} height={150} />
          </div>
          <p className="text-sm  ">
            Flexing with Hiùm: Building Resilience in the Crypto Game{" "}
          </p>
        </div>
        <div className="w-1/3">
          <div className="flex justify-center">
            <Image className="" src={idea} alt=" " width={150} height={150} />
          </div>
          <p className="text-sm">Always get great idea</p>
        </div>
        <div className="w-1/3">
          <div className="flex justify-center">
            <Image className="" src={search} alt=" " width={150} height={150} />
          </div>
          <p className="text-sm">Do research after buy anything</p>
        </div>
      </div>
    </div>
  );
}
