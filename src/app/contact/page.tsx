"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIALS } from "../utils/constants/socials";
import { Social } from "../utils/types/socials";
import NavBar from "@/components/common/navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const [socials] = useState<Social[]>(SOCIALS);

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-gradient-primary items-center overflow-y-auto">
      <NavBar />
      <div className="flex w-full px-20">
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
          <div className="w-full p-5 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <div className="flex-1 flex flex-col items-center justify-center text-center md:text-left">
              <div className="text-white text-[64px] md:text-5xl font-bold w-60">
                Want to work
              </div>
              <div className="text-accent text-[64px] md:text-5xl font-bold w-60">
                together?
              </div>
            </div>
            <div className="flex-1">
              <div className="relative bg-gray-800 rounded-2xl shadow-lg z-10">
                {/* HEADER */}
                <div className="flex items-center pl-5 p-3 bg-secondary rounded-t-2xl">
                  <div className="flex-1 flex">
                    <div className="w-2 h-2 mr-3 rounded-full bg-cyan-400"></div>
                    <div className="w-2 h-2 mr-3 rounded-full bg-accent"></div>
                    <div className="w-2 h-2 rounded-full bg-cyan-200"></div>
                  </div>
                </div>

                {/* CONTACT FORM */}
                <div className="p-8 bg-primary border-4 rounded-b-2xl border-secondary">
                  <div className="flex flex-col space-y-6">
                    <div className="text-center md:text-left">
                      <div className="text-accent font-bold text-3xl md:text-4xl">
                        <p className="mb-2">Contact</p>
                      </div>
                      <div className="text-accent font-bold text-3xl md:text-4xl border-b-2 border-accent">
                        <p className="mb-4">Me</p>
                      </div>
                    </div>

                    {/* FORM FIELDS */}
                    <div className="space-y-6">
                      {/* NAME */}
                      <div className="pb-1 border-b border-gray-600">
                        <input
                          className="w-full bg-transparent text-sm text-gray-300 placeholder-gray-600 focus:outline-none"
                          placeholder="NAME"
                        />
                      </div>

                      {/* EMAIL*/}
                      <div className="pb-1 border-b border-gray-600">
                        <input
                          className="w-full bg-transparent text-sm text-gray-300 placeholder-gray-600 focus:outline-none"
                          placeholder="EMAIL"
                        />
                      </div>

                      {/* MESSAGE */}
                      <div className="pb-1 border-b border-gray-600">
                        <textarea
                          className="w-full min-h-[80px] max-h-[180px] bg-transparent text-sm text-gray-300 placeholder-gray-600 focus:outline-none"
                          placeholder="MESSAGE"
                        ></textarea>
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex justify-end gap-2 pb-4 text-[14px]">
                      <button className="text-white hover:border-b-2 hover:border-accent border-b-2 border-transparent">
                        CANCEL
                      </button>
                      <button className="text-accent g hover:border-b-2 hover:border-accent border-b-2 border-transparent">
                        SEND
                      </button>
                    </div>

                    {/* SOCIAL MEDIA ICONS */}
                    <div className="flex flex-row w-full justify-start items-center gap-3 mt-8">
                      {socials.map((social, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            window.open(social.url ?? "", "_blank")
                          }
                        >
                          <FontAwesomeIcon
                            icon={social.icon}
                            className="h-[40px] w-[40px]"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
