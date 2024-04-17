import React from "react";
import tele from "../asset/tele.svg";
import xx from "../asset/xx.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="animate__animated animate__fadeInUp">
      <div className="flex gap-2 pt-10 justify-end pb-4 ">
        <a href="">
          {" "}
          <Image
            className="lg:w-[40px] lg:h-[40px]"
            src={xx}
            alt=" "
            width={30}
            height={30}
          />
        </a>
        <a href="">
          {" "}
          <Image
            className="lg:w-[40px] lg:h-[40px]"
            src={tele}
            alt=" "
            width={30}
            height={30}
          />
        </a>
      </div>
    </div>
  );
}
