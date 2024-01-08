import Image from "next/image";
import React from "react";
import AccordionOLD from "./AccordionOLD";
import Accordian from "./Accordian";

export default function Ecosystem() {
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
    <div className="text-white">
      <h1 className="mx-10 font-extrabold text-6xl">PLAYIN ECOSYSTEM</h1>
      <div className="flex flex-row justify-center">
        <div className="max-w-md w-full">
          {/* {lists.map((list) => (
            <div key={list.title}>
              <details className="details-class">
                <summary>{list.title}</summary>
                {list.description}
              </details>
            </div>
          ))} */}
          {/* <AccordionOLD /> */}
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

const Play2Earn = () => {
  return (
    <div>
      <div>
        You automatically earn a set amount of PLEX points just by owning a
        COLLECTIBLE.
      </div>
      <div>Play by Play. All the time, Everytime.</div>
      <ul className="list-disc">
        <li>
          There are 5 tiers of PlayIn Collectibles <br />
          NORMAL, COOL, RARE, EPIC, ELITE <br />
          The higher tier the item, the higher the bonuses you earn on your
          gameplay
        </li>
        <li>
          You can PURCHASE Collectibles that are listed on the PlayIn
          marketplace. <br />
          You can SELL your own rare Collectibles after upgrading them.
        </li>
      </ul>
      <div>Using CONSUMABLES to elevate your PlayIn experience</div>
      <ul className="list-disc">
        <li>
          "DRIPS" can be used to upgrade your Collectible, without buying a new
          one.
        </li>
        <li>"SPLASHES" are used to clean up your wearables.</li>
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
      <div>SENTIMENT</div>
      <div>
        You might not know this, but the largest sportsbooks bake egregious fees
        into the odds they offer to you. You never truly win.
      </div>
      <ul className="list-disc">
        <li>
          STOP GETTING FLEECED and BET WITH PLAYIN.
          <br /> Why take unappealing odds when you can set your own?
        </li>
      </ul>
      <div>
        Our DYNAMIC ODDS pricing are based on PLAYER-SENTIMENT at any given
        moment.
      </div>
      <ul className="list-disc">
        <li>
          This means if you BET RIGHT and you BET EARLY, you GET PAID BIG TIME!
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
        Our NOVEL secure blockchain technology REVOLUTIONALIZES the sports
        betting industry.
      </div>
      <ul className="list-disc">
        <li>
          We aim to bring offchain bet-outcome verification to a LIVE-FEED
          ORACLE
        </li>
        <li>Constantly monitoring various sporting-event statistics</li>
        <li>
          ORACLE VERIFIED SPORT OUTCOMES communicates with our bet-execution
          smart-contract to INSTANTANEOUSLY settle and distribute player's funds
        </li>
      </ul>
      <div>
        TLDR: PlayIn's leading blockchain technologies are custom-fitted for a
        approachable, gamified sports betting experience.
      </div>
      <div>
        We bring you an experience that you already know and love, but faster,
        safer, cooler.
      </div>
    </div>
  );
};

const Autopilot = () => {
  return (
    <div>
      <div>WINNING SHOULD BE EASIER.</div>
      <div>
        Expert in Football but not so in Cricket? Delegate $PLAYN to
        Leaderboard-Pros and EARN PASSIVELY.
      </div>
      <ul className="list-disc">
        <li>
          PlayIn's WINNINGEST BETTORS (Anchors) have a track record that speaks
          for themselves
        </li>
        <li>Delegate $PLAYN to Anchors in a SECURE DELEGATION CONTRACT</li>
        <li>
          Anchors have access to additional funds to up their stake, but
          winnings are SPLIT AUTOMATICALLY between Anchor's wallets and the
          delegation contract
        </li>
        <li>All you have to do is sit back and WATCH YOUR $$$ GROW!</li>
      </ul>
    </div>
  );
};
