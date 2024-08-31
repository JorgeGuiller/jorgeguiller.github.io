"use client";

import NavBar from "@/components/common/navbar";
import Image from "next/image";
import { useState } from "react";
import { Social } from "./utils/type/socials";

export default function Home() {
  const [socials] = useState<Social[]>([
    {
      name: "GitHub",
      icon: "/assets/icons/github.svg",
      url: "",
    },
    {
      name: "LinkedIn",
      icon: "/assets/icons/linkedin.svg",
      url: "",
    },
    {
      name: "Facebook",
      icon: "/assets/icons/facebook.svg",
      url: "",
    },
    {
      name: "Email",
      icon: "/assets/icons/email.svg",
      url: "mailto:jorgeguiller.gonzales@gmail.com",
    },
  ]);

  return (
    <main className="relative flex flex-col min-h-screen w-full bg-gradient-primary items-center">
      <NavBar />
      <div className="flex w-full px-20">
        <div className="flex w-full py-[80px] px-[120px] bg-gradient-secondary rounded-[20px]">
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-col justify-center items-center max-w-[600px] text-justify">
              <span className="text-accent text-[45px] font-bold">
                Hello, World
              </span>
              <span className="text-text text-[20px] font-regular">
                I am Jorge Guiller Gonzales, a 4th year Computer Science student
                at the University of the Philippines Visayas. I specialize in
                these nuts in your mouth. I play billiards and Valorant in my
                free time. Sometimes I'm Julie.
              </span>
              <div className="flex flex-row w-full justify-center items-center gap-3 mt-8">
                {socials.map((social, index) => (
                  <button key={index}>
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={40}
                      height={40}
                    />
                  </button>
                ))}
              </div>
            </div>
            <Image src="/popup.jpg" alt="popup" width={600} height={600} />
          </div>
        </div>
      </div>
    </main>
  );
}
