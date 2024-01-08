import Image from "next/image";
import React from "react";

export default function Footer() {
  const socials = [
    {
      name: "twitter",
      icon: "/assets/footer-twitter.svg",
      link: "/",
    },
    {
      name: "linkedin",
      icon: "/assets/footer-linkedin.svg",
      link: "/",
    },
    {
      name: "discord",
      icon: "/assets/footer-discord.svg",
      link: "/",
    },
  ];
  return (
    <div className="mx-10 border-t border-white">
      <Image
        src={"/assets/playin-logo.svg"}
        alt="logo"
        height={40}
        width={110}
        className="mx-auto mt-10"
      />
      <ul className="flex justify-center space-x-8 mt-10">
        {socials.map((social) => (
          <li key={social.name}>
            <Image src={social.icon} alt={social.name} height={27} width={27} />
          </li>
        ))}
      </ul>
      <footer className="flex flex-row justify-between text-slate-600 mt-10">
        <div>
          <div>Security</div>
          <div>Privacy Policy</div>
        </div>
        <div className="flex items-center">
          <Image
            src={"/assets/gmail.svg"}
            alt="gmail icon"
            width={27}
            height={27}
          />
          <div>hello@playintechnologies.com</div>
        </div>
        <div>
          <div>PlayIn, Inc. 2013 - 2022.</div>
          <div>All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
}
