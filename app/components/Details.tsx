import React from "react";
import Image from "next/image";

export default function Details() {
  return (
    <div className="space-y-16">
      <div>
        <div className="mx-10 flex flex-row justify-center space-x-10">
          <div>
            <Image
              src={"/assets/crystals.svg"}
              alt="crystals"
              width={376}
              height={400}
            />
          </div>
          <div className="text-right max-w-md w-full">
            <h1 className="text-6xl text-white">PLEX XP</h1>
            <div className="text-slate-500">
              The game rewards token. Use it to <br />
              level up your PlayIn Badge & <br />
              Collectibles.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-10 flex flex-row justify-center space-x-10">
          <div className="text-6xl font-extrabold max-w-md w-full text-white">
            $BETR <br />
            GOVERNANCE <br />
            TOKEN
          </div>
          <div className="text-right max-w-md w-full">
            <div className="text-slate-500">
              The $BETR token grants holders <br />
              votes in governing the underlying
              <br />
              Play-2-Earn ecosystem
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-10 flex flex-row justify-center space-x-10">
          <div>
            <Image
              src={"/assets/money-stack.svg"}
              alt="money stack"
              width={267}
              height={308}
            />
          </div>
          <div className="text-right max-w-md w-full">
            <h1 className="text-6xl text-white">$PLAYN TOKEN</h1>
            <div className="text-slate-500">
              The value carrying token that <br />
              facilitates all wagers & purchases
              <br />
              on the PlayIn Marketplace
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
