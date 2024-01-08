import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 2rem;
    font-size: 2rem;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #00ffb9;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;

  p {
    font-size: 2rem;
  }
`;

const AccordionOLD = () => {
  const [clicked, setClicked] = useState<number[]>([]);

  const Data = [
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

  const toggle = (index: number) => {
    if (clicked.includes(index)) {
      return setClicked(clicked.filter((i) => i !== index));
    }

    setClicked([...clicked, index]);
  };

  return (
    <AccordionSection>
      <Container>
        {Data.map((item, index) => {
          return (
            <div key={index}>
              <Wrap onClick={() => toggle(index)} key={index}>
                <h1>{item.title}</h1>
                {clicked.includes(index) ? (
                  <Image
                    width={24}
                    height={24}
                    alt="icon"
                    src={"/assets/minus-icon.svg"}
                  />
                ) : (
                  <Image
                    width={24}
                    height={24}
                    alt="icon"
                    src={"/assets/plus-icon.svg"}
                  />
                )}
              </Wrap>
              {clicked.includes(index) ? (
                <Dropdown>
                  <p>{item.description}</p>
                </Dropdown>
              ) : null}
            </div>
          );
        })}
      </Container>
    </AccordionSection>
  );
};

export default AccordionOLD;

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
