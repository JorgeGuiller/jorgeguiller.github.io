"use client";

import NavBar from "@/components/common/navbar";
import Image from "next/image";
import { Social } from "./utils/types/socials";
import { SOCIALS } from "./utils/constants/socials";
import { SCHOOLS } from "./utils/constants/education";
import { Education } from "./utils/types/education";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { routes } from "./utils/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const router = useRouter();
  const [socials] = useState<Social[]>(SOCIALS);
  const [education] = useState<Education[]>(SCHOOLS);

  return (
    <main className="relative flex flex-col min-h-screen w-full bg-gradient-primary items-center overflow-y-auto">
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
                  <button
                    key={index}
                    onClick={() => window.open(social.url ?? "", "_blank")}
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="h-[40px] w-[40px]"
                    />
                  </button>
                ))}
              </div>
              <button
                className="border-2 border-accent text-text text-[20px] font-bold px-4 py-2 mt-8 tracking-wider"
                onClick={() => router.push(routes.projects)}
              >
                VIEW MY PROJECTS
              </button>
            </div>
            <Image src="/popup.jpg" alt="popup" width={600} height={600} />
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full py-[120px] px-[200px] items-start justify-center">
        <span className="text-text text-[45px] font-bold mr-20 w-1/4">
          Education
        </span>
        <div className="flex flex-col gap-10 w-3/4">
          <div className="flex flex-col w-full">
            {education.map((school, index) => (
              <div key={index} className="mb-10">
                <div className="flex flex-row justify-between items-center">
                  <span className="text-text text-[28px] font-bold">
                    {school.course}
                  </span>
                  <span className="text-text text-[16px] font-regular ml-4">
                    {school.date}
                  </span>
                </div>
                <span className="text-accent text-[20px] font-regular">
                  {school.school}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-20 mb-[120px] items-center">
        <span className="text-text text-[45px] font-bold text-center">
          Projects
        </span>
      </div>
    </main>
  );
}
