"use client";

import { routes } from "@/app/utils/routes";
import { useRouter } from "next/navigation";

function NavBar() {
  const router = useRouter();

  return (
    <div className="w-full h-16 flex items-center justify-between py-10 px-20 mt-5">
      <span className="text-accent text-[36px] font-bold">Jorge</span>
      <div className="flex items-center justify-center gap-10">
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
    </div>
  );
}

export default NavBar;
