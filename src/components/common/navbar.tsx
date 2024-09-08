"use client";

import { routes } from "@/app/utils/routes";
import { handleDownload } from "@/app/utils/web/download";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

function NavBar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadResume = async () => {
    await handleDownload();
  };

  return (
    <>
      <div className="w-full h-16 flex items-center justify-between py-10 lg:px-20 px-8 mt-5">
        <section>
          <span
            className="text-accent text-[36px] font-bold hover:cursor-pointer relative after:bg-accent after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            onClick={() => {
              router.push(routes.home);
            }}
          >
            JG
          </span>
        </section>
        <div className="flex items-center justify-center gap-10">
          <div className="hidden lg:flex items-center justify-center gap-10">
            <section>
              <span
                className="text-[20px] hover:text-accent font-regular hover:cursor-pointer relative after:bg-accent after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                onClick={() => {
                  router.push(routes.projects);
                }}
              >
                Projects
              </span>
            </section>
            <section>
              <span
                className="text-[20px] hover:text-accent font-regular hover:cursor-pointer relative after:bg-accent after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                onClick={() => {
                  router.push(routes.contact);
                }}
              >
                Contact
              </span>
            </section>
            <section>
              <span
                className="text-[20px] hover:text-accent font-regular hover:cursor-pointer relative after:bg-accent after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointerr"
                onClick={handleDownloadResume}
              >
                Resume
              </span>
            </section>
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
