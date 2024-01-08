"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const path = usePathname();

  const links = [
    { name: "Home", link: "/" },
    { name: "How to Play2Earn", link: "/Play2Earn" },
    { name: "Roadmap", link: "/Roadmap" },
    { name: "Our Worth", link: "/Worth" },
    { name: "About us", link: "/About" },
  ];

  return (
    <div className="flex flex-row justify-between px-5 mt-4 items-center">
      <div>
        <Image
          src={"/assets/playin-logo.svg"}
          alt="logo"
          width={110}
          height={36}
        />
      </div>
      <div>
        <ul className="flex space-x-4 text-white">
          {links.map((link) => (
            <li
              key={link.name}
              className={`${
                path === link.link ? "text-neon-green" : "text-slate-600"
              } hover:text-neon-green`}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-black bg-neon-green py-4 px-8 -skew-x-12 border border-neon-green hover:text-white hover:bg-transparent transition duration-500">
        Get Started
      </div>
    </div>
  );
}
