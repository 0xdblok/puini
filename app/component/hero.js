import React from "react";
import hero from "../asset/hero.png";
import Image from "next/image";
export default function Hero() {
  return (
    <div>
      <div className="flex-none   md:flex md:justify-center md:gap-32 pt-8">
        {" "}
        <div className=" md:w-1/2">
          {" "}
          <div className=" flex justify-center">
            <Image
              className=" flex justify-center rounded-full borded-4 border-white  bg-[#F5E6E8]"
              src={hero}
              alt=" "
              width={350}
              height={350}
            />
          </div>
        </div>
        <div className=" md:flex md:w-1/2 md:items-center ">
          {" "}
          <h1 className="text-xl pt-6 md:pt-0 font-serif text-center text-gray-700">
            Puni is a pink rabbit which exist in land of Baseana. He has ability
            to predict where to find the right spot to climb up to the moon. He
            has a rare attribute which gives him green big banana that will blow
            your roof. Ohh Sh*
          </h1>
        </div>
      </div>
    </div>
  );
}
