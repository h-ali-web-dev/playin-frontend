"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Accordian() {
  const lists = [
    {
      title: "PLAY2EARN WITH COLLECTIBLES",
      description: <Play2Earn />,
    },
    {
      title: "SENTIMENT AND CONSENSUS ODDS MAKING",
      description: <Sentiment />,
    },
    {
      title: "ORACLE TO CONTRACT SETTLEMENT",
      description: <Oracle />,
    },
    {
      title: "BETTING ON AUTOPILOT",
      description: <Autopilot />,
    },
  ];

  return (
    <div>
      {lists.map((list) => (
        <div key={list.title}>
          <AccordionSection title={list.title}>
            {list.description}
          </AccordionSection>
        </div>
      ))}
    </div>
  );
}

const AccordionSection = ({
  title,
  children,
}: {
  title: String;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white my-4">
      <button
        type="button"
        className={`${
          isOpen ? "bg-playin-green" : "bg-transparent"
        } " w-full px-4 py-2 text-lg font-medium text-left text-gray-700 focus:outline-none" `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between">
          <span className={`${isOpen ? "text-black" : "text-white"}`}>
            {title}
          </span>
          <span className="text-white font-extrabold">
            {isOpen ? "-" : "+"}
          </span>
        </div>
      </button>
      {isOpen && <div className="p-4 ml-4">{children}</div>}
    </div>
  );
};

const Play2Earn = () => {
  return (
    <div>
      <div>
        <Image
          src={"/assets/blue-star.svg"}
          alt=""
          width={16}
          height={16}
          className="inline mr-2"
        />
        You automatically earn a set amount of{" "}
        <span className="text-playin-green">PLEX</span> points just by owning a
        <span className="text-playin-green"> COLLECTIBLE</span>.
      </div>
      <div>Play by Play. All the time, Everytime.</div>
      <ul className="list-disc">
        <li>
          There are <span className="text-playin-green">5 tiers</span> of PlayIn
          Collectibles <br />
          <span className="font-semibold">NORMAL</span>,{" "}
          <span className="text-playin-blue">COOL</span>,{" "}
          <span className="text-playin-green">RARE</span>,{" "}
          <span className="text-playin-purple">EPIC</span>,{" "}
          <span className="text-playin-gold">ELITE</span> <br />
          The higher tier the item, the higher the bonuses you earn on your
          gameplay
        </li>
        <li>
          You can <span className="font-bold">PURCHASE </span>
          Collectibles that are listed on the PlayIn marketplace. <br />
          You can <span className="font-bold">SELL </span> your own rare
          Collectibles after upgrading them.
        </li>
      </ul>
      <div>
        <Image
          src={"/assets/blue-star.svg"}
          alt=""
          width={16}
          height={16}
          className="inline mr-2"
        />
        Using <span className="text-playin-blue">CONSUMABLES </span> to elevate
        your PlayIn experience
      </div>
      <ul className="list-disc">
        <li>
          "<span className="text-playin-blue">DRIPS</span>" can be used to
          upgrade your Collectible, without buying a new one.
        </li>
        <li>
          "<span className="text-playin-blue">SPLASHES</span>" are used to clean
          up your wearables.
        </li>
      </ul>
      <div>
        Keep your Collectibles pristine to earn the maximum amount of PLEX
        points.
      </div>
    </div>
  );
};

const Sentiment = () => {
  return (
    <div>
      <Image
        src={"/assets/blue-star.svg"}
        alt=""
        width={16}
        height={16}
        className="inline mr-2"
      />
      <div className="text-playin-green inline">
        WE'LL LET YOU IN ON A SECRET...
      </div>
      <div>
        You might not know this, but the largest sportsbooks bake egregious fees
        into the odds they offer to you. You never truly win.
      </div>
      <ul className="list-disc">
        <li>
          <span className="text-playin-danger">STOP GETTING FLEECED </span> and
          <span className="text-playin-green"> BET WITH PLAYIN.</span>
          <br /> Why take unappealing odds when you can set your own?
        </li>
      </ul>
      <div>
        <Image
          src={"/assets/blue-star.svg"}
          alt=""
          width={16}
          height={16}
          className="inline mr-2"
        />
        Our <span className="font-bold">DYNAMIC ODDS </span> pricing are based
        on <span className="font-bold">PLAYER-SENTIMENT </span> at any given
        moment.
      </div>
      <ul className="list-disc">
        <li>
          This means if you <span className="font-bold">BET RIGHT </span> and
          you <span className="font-bold">BET EARLY</span>, you{" "}
          <span className="text-playin-green"> GET PAID BIG TIME</span>!
        </li>
        <li>
          If you feel like you've won enough, take profits early by reselling
          your position on the market
        </li>
      </ul>
    </div>
  );
};

const Oracle = () => {
  return (
    <div>
      <div>
        <Image
          src={"/assets/blue-star.svg"}
          alt=""
          width={16}
          height={16}
          className="inline mr-2"
        />
        Our <span className="text-playin-green">NOVEL </span>
        secure blockchain technology{" "}
        <span className="text-playin-green">REVOLUTIONALIZES </span> the sports
        betting industry.
      </div>
      <ul className="list-disc">
        <li>
          We aim to bring offchain bet-outcome verification to a{" "}
          <span className="font-bold">LIVE-FEED ORACLE</span>
        </li>
        <li>Constantly monitoring various sporting-event statistics</li>
        <li>
          <span className="text-playin-green">
            ORACLE VERIFIED SPORT OUTCOMES
          </span>{" "}
          communicates with our bet-execution smart-contract to
          <span className="text-playin-green"> INSTANTANEOUSLY</span> settle and
          distribute player's funds
        </li>
      </ul>
      <div>
        <Image
          src={"/assets/blue-star.svg"}
          alt=""
          width={16}
          height={16}
          className="inline mr-2"
        />
        <span className="text-playin-blue">TLDR</span>: PlayIn's leading
        blockchain technologies are custom-fitted for a approachable, gamified
        sports betting experience.
      </div>
      <div className="text-center text-playin-blue">
        We bring you an experience that you already know and love, but faster,
        safer, cooler.
      </div>
    </div>
  );
};

const Autopilot = () => {
  return (
    <div>
      <Image
        src={"/assets/blue-star.svg"}
        alt=""
        width={16}
        height={16}
        className="inline mr-2"
      />
      <span className="text-playin-gold">WINNING SHOULD BE EASIER.</span>
      <div>
        Expert in Football but not so in Cricket? Delegate{" "}
        <span className="text-playin-green"> $PLAYN</span> to Leaderboard-Pros
        and <span className="text-playin-gold"> EARN PASSIVELY</span>.
      </div>
      <ul className="list-disc">
        <li>
          PlayIn's{" "}
          <span className="text-playin-green"> WINNINGEST BETTORS</span>{" "}
          (Anchors) have a track record that speaks for themselves
        </li>
        <li>
          Delegate $PLAYN to Anchors in a{" "}
          <span className="font-bold">SECURE DELEGATION CONTRACT</span>
        </li>
        <li>
          Anchors have access to additional funds to up their stake, but
          winnings are <span className="font-bold">SPLIT AUTOMATICALLY</span>{" "}
          between Anchor's wallets and the delegation contract
        </li>
        <li>
          All you have to do is sit back and{" "}
          <span className="text-playin-gold">WATCH YOUR $$$ GROW!</span>
        </li>
      </ul>
    </div>
  );
};
