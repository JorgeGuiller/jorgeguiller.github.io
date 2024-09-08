"use client";

import NavBar from "@/components/common/navbar";
import Image from "next/image";
import { Social } from "@/utils/types/socials";
import { SOCIALS } from "@/utils/constants/socials";
import { SCHOOLS } from "@/utils/constants/education";
import { Education } from "@/utils/types/education";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { routes } from "@/utils/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PROJECTS } from "@/utils/constants/projects";

export default function Home() {
  const router = useRouter();
  const [socials] = useState<Social[]>(SOCIALS);
  const [education] = useState<Education[]>(SCHOOLS);
  const [activeIndex, setActiveIndex] = useState(0);
  const project = PROJECTS[activeIndex];

  return (
    <main className="relative flex flex-col min-h-screen w-full bg-gradient-primary items-center overflow-y-auto">
      <NavBar />
      <div className="flex w-full lg:px-20 px-8">
        <div className="flex flex-col lg:flex-row w-full lg:py-[80px] lg:px-[100px] py-[40px] px-[40px] bg-gradient-secondary rounded-[20px]">
          <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-5">
            <div className="flex flex-col justify-center items-center max-w-[600px] text-justify">
              <span className="text-accent text-[45px] font-bold">
                Hello, World
              </span>
              <span className="text-text text-[20px] font-regular">
                I am Jorge Guiller Gonzales, a 4th year Computer Science student
                at the University of the Philippines Visayas. I specialize in
                these nuts in your mouth. I play billiards and Valorant in my
                free time. Sometimes I&apos;m Julie.
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
            <Image
              src="/popup.jpg"
              alt="popup"
              width={500}
              height={500}
              className="w-full max-w-[600px] lg:py-0 py-5 lg:mt-0 mt-5 rounded-[100px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:py-[80px] lg:px-[100px] py-[40px] px-[40px]">
        <span className="text-text text-[45px] font-bold lg:mb-20 mb-10 w-full lg:mr-20 mr-0 lg:w-1/4 text-center lg:text-left">
          Education
        </span>
        <div className="flex gap-10 lg:w-3/4 w-full">
          <div className="flex flex-col w-full">
            {education.map((school, index) => (
              <div key={index} className="mb-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full">
                  <div className="flex flex-col lg:flex-row justify-between w-full lg:items-center sm:items-start">
                    <span className="text-text text-[28px] font-bold">
                      {school.course}
                    </span>
                    <span className="text-text text-[16px] font-regular">
                      {school.date}
                    </span>
                  </div>
                </div>
                <span className="text-accent text-[20px] font-regular mt-2">
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
        <Slider
          dots
          infinite
          arrows={false}
          speed={500}
          slidesToShow={window.innerWidth < 768 ? 1 : 3}
          slidesToScroll={1}
          className="w-full flex items-center mt-10"
          centerMode={true}
          beforeChange={(current, next) => setActiveIndex(next)}
        >
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-transform duration-300 ${
                activeIndex === index ? "scale-110" : "scale-75"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={700}
                height={450}
                className="object-contain rounded-[40px]"
              />
            </div>
          ))}
        </Slider>
        <div className="bg-secondary lg:w-[480px] lg:h-[190px] w-full mt-10 flex flex-col items-center justify-between p-5 rounded-xl border-[3px] border-[#35435AE5]">
          <div className="w-full flex justify-center">
            <span className="font-bold text-[24px] text-center">
              {project.title}
            </span>
          </div>

          <div className="w-full flex justify-center">
            <span className="font-regular text-[14px] text-justify leading-relaxed text-center">
              {project.description}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
