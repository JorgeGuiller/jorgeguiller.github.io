"use client";

import { routes } from "@/app/utils/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

function NavBar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full h-16 flex items-center justify-between py-10 lg:px-20 px-8 mt-5">
        <span className="text-accent text-[36px] font-bold">Jorge</span>
        <div className="flex items-center justify-center gap-10">
          <div className="hidden lg:flex items-center justify-center gap-10">
            <span
              className="text-[20px] font-regular hover:text-accent transition-all duration-500 hover:cursor-pointer"
              onClick={() => {
                router.push(routes.projects);
              }}
            >
              Projects
            </span>
            <span
              className="text-[20px] font-regular hover:text-accent transition-all duration-500 hover:cursor-pointer"
              onClick={() => {
                router.push(routes.contact);
              }}
            >
              Contact
            </span>
            <span
              className="text-[20px] font-regular hover:text-accent transition-all duration-500 hover:cursor-pointer"
              onClick={() => {}}
            >
              Resume
            </span>
          </div>
          <div className="lg:hidden block">
            <button className="relative" onClick={() => setIsOpen(!isOpen)}>
              <Image
                src="/assets/icons/hamburger.svg"
                height={25}
                width={25}
                alt="hamburger"
              />
            </button>
            {isOpen && (
              <div className="fixed right-0 mr-6 bg-secondary text-white font-semibold shadow-lg rounded-lg z-40">
                <div className="flex flex-col p-2">
                  <span
                    className="hover:bg-accent hover:text-primary flex w-full px-5 py-3 rounded-lg"
                    onClick={() => router.push(routes.projects)}
                  >
                    Projects
                  </span>
                  <span
                    className="hover:bg-accent hover:text-primary flex w-full px-5 py-3 rounded-lg"
                    onClick={() => router.push(routes.contact)}
                  >
                    Contact
                  </span>
                  <span
                    className="hover:bg-accent hover:text-primary flex w-full px-5 py-3 rounded-lg"
                    onClick={() => {}}
                  >
                    Resume
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
