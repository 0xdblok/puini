import React from "react";
import hero from "../asset/hero.png";
import Image from "next/image";
export default function Hero() {
  return (
    <div>
      <div className="flex-none   md:flex md:justify-center md:gap-32 pt-8">
        {" "}
        <div className="flex justify-center md:w-1/2">
          {" "}
          <Image
            className=" rounded-full bg-[#F5E6E8]"
            src={hero}
            alt=" "
            width={350}
            height={350}
          />
        </div>
        <div className=" md:flex md:w-1/2 md:items-center ">
          {" "}
          <h1 className="text-xl font-serif text-center text-gray-700">
            Hiùm with shades on, holding a magnifying glass, symbolizing
            research and exploration
          </h1>
        </div>
      </div>
    </div>
  );
}
