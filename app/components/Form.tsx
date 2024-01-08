import React from "react";
import Image from "next/image";

export default function Form() {
  return (
    <div>
      <h2 className="text-neon-green text-6xl font-thin text-center">
        PLAYIN EARLY <br />
        ACCESS CARDS
      </h2>
      <div className="text-slate-600 text-center">
        The PlayIn Access Card is the beginning of the PlayIn journey. There are
        5 tiers, <br />
        each with their own set of reward incentives. Be the first to know when
        we release.
      </div>
      <form className="max-w-xl w-full mx-auto mt-12">
        <input
          type="email"
          placeholder="Your Email Address"
          className="w-full border border-white p-5 bg-transparent text-white"
        />
        <div className="flex flex-row mt-4">
          <input
            type="text"
            placeholder="Referral Code"
            className="w-full border border-white p-5 bg-transparent text-white"
          />
          <button type="submit" className="bg-neon-green text-2xl px-12 ml-6">
            Submit
          </button>
        </div>
      </form>
      <div className="text-center text-slate-600 mt-4">
        If you have already signed up then enter your email again to see your
        standing in waitlist
      </div>
      <div className="mx-10 flex flex-row justify-center space-x-10">
        <div className="text-right max-w-md w-full">
          <div className="text-neon-green text-3xl">
            HOLDERS ARE ELIGIBLE FOR <br />
            EXCLUSIVE EARLY ACCESS, <br />
            GOVERNANCE TOKEN <br />
            ALLOCATIONS, RAFFLES, <br />
            REWARDS & IRL EXPERIENCES.
          </div>
        </div>
        <div>
          <Image
            src={"/assets/spaceship.svg"}
            alt="crystals"
            width={376}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
