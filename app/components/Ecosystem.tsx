import Image from "next/image";
import React from "react";
import Accordian from "./Accordian";

export default function Ecosystem() {
  return (
    <div className="text-white">
      <h1 className="mx-10 font-extrabold text-6xl">PLAYIN ECOSYSTEM</h1>
      <div className="flex flex-row justify-center">
        <div className="max-w-md w-full">
          <Accordian />
        </div>
        <div>
          <Image
            src={"/assets/playin-gold-spinning.gif"}
            alt="playin logo"
            height={530}
            width={530}
            className="max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
