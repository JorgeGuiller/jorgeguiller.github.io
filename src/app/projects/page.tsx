"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
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
      <div className="flex w-full px-20 pb-10">
        <div className="flex flex-col w-full py-[80px] px-[120px] bg-gradient-secondary rounded-[20px] relative">
          <button
            className="absolute top-4 left-4 p-6"
            onClick={() => router.back()}
          >
            <Image
              src="/assets/icons/back.svg"
              height={32}
              width={32}
              alt="back"
            />
          </button>

          {/* TITLE */}
          <div className="relative flex flex-row items-center justify-center mb-10">
            <h1 className="text-4xl font-bold text-center relative z-10 px-4 text-accent flex items-center">
              <div className="w-[30px] border-t-2 border-gray-300 mr-4" />
              My Projects
              <div className="w-[30px] border-t-2 border-gray-300 ml-4" />
            </h1>
          </div>

          <div className="flex flex-col gap-2 items-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row py-12 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } max-w-7xl w-full rounded-lg shadow-md transition-shadow duration-300 overflow-hidden`}
              >
                <div className="absolute bottom-0 border-t-2 left-0 w-full border-accent"></div>

                {/* IMAGES */}
                <div className="md:w-2/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* PROJECT DETAILS */}
                <div className="flex flex-col justify-between p-6 md:w-3/5">
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
