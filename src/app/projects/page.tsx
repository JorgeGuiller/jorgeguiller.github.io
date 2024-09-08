"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import NavBar from "@/components/common/navbar";
import { PROJECTS } from "../utils/constants/projects";
import { Project } from "../utils/types/projects";
import Image from "next/image";

export default function Projects() {
  const router = useRouter();
  const [projects] = useState<Project[]>(PROJECTS);

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-gradient-primary items-center overflow-y-auto">
      <NavBar />
      <button
        className="absolute lg:top-4 top-[118px] lg:left-4 left-6 p-6"
        onClick={() => router.back()}
      >
        <Image src="/assets/icons/back.svg" height={32} width={32} alt="back" />
      </button>
      <div className="flex flex-col w-full lg:px-20 px-8 pb-10">
        <div className="flex flex-col w-full lg:py-[80px] lg:px-[100px] py-[40px] px-[40px] bg-gradient-secondary rounded-[20px]">
          {/* TITLE */}
          <div className="relative flex flex-col items-center justify-center lg:mb-10 mb-0">
            <h1 className="text-4xl font-bold text-center relative z-10 px-4 text-accent flex items-center">
              Projects
            </h1>
          </div>

          <div className="flex flex-col gap-2 items-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row py-12 gap-5 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } w-full rounded-lg shadow-md transition-shadow duration-300 overflow-hidden`}
              >
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent" />

                {/* IMAGES */}
                <div className="md:w-2/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* PROJECT DETAILS */}
                <div className="flex flex-col justify-between lg:p-6 lg:py-0 py-4 md:w-3/5">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">
                      {project.title}
                    </h2>
                    <p className="text-text mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {/* TECH STACK*/}
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-secondary text-text py-2 px-4 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-row space-x-5 mt-5">
                    <a
                      href={project.link}
                      className="bg-accent py-2 px-4 rounded-lg inline-block w-24 text-primary text-center"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.link}
                      className="bg-primary border border-accent py-2 rounded-lg inline-block w-24 text-accent text-center"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
