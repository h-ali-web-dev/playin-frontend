import Image from "next/image";
import React from "react";

export default function Gameplan() {
  const cards = [
    {
      title:
        "You must reach the Daily PLEX Rewards Target. Win or Lose, PLEX is earned.",
      icon: "/assets/medal.svg",
    },
    {
      title: "You are then granted an allocation of $PLAYN Tokens.",
      icon: "/assets/token.svg",
    },
    {
      title:
        "$PLAYN Token allocations are auto-staked, and you receive a share of the revenue generated from $PLAYN liquidity pools.",
      icon: "/assets/nft.svg",
    },
  ];
  return (
    <div className="flex flex-row justify-center space-x-10">
      <div className="flex items-center flex-col justify-center max-w-md">
        <h1 className="text-white text-4xl">IN GAME XP TO REAL MONEY</h1>
        <div className="justify-end text-slate-500">
          <div>A simple gameplan:</div>
          <div>In-Game XP to Real $$$</div>
        </div>
      </div>
      <div>
        {cards.map((card) => (
          <div
            key={card.title}
            className="border border-white p-5 my-4 max-w-md"
          >
            <div className="flex flex-row">
              <Image src={card.icon} alt="icon" width={54} height={54} />
              <div className="text-white">{card.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
