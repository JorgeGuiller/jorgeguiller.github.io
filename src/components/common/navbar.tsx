"use client";

import { useRouter } from "next/navigation";

function NavBar() {
  const router = useRouter();

  return (
    <div className="w-full h-16 flex items-center justify-between p-20">
      <span className="text-accent text-[45px] font-bold">Jorge</span>
      <div className="flex items-center justify-center gap-10">
        <span
          className="text-[24px] font-regular hover:text-accent transition-all duration-500 hover:cursor-pointer"
          onClick={() => {
            router.push("/projects");
          }}
        >
          Projects
        </span>
        <span
          className="text-[24px] font-regular hover:text-accent transition-all duration-500 hover:cursor-pointer"
          onClick={() => {
            router.push("/contact");
          }}
        >
          Contact
        </span>
        <span
          className="text-[24px] font-regular hover:text-accent transition-all duration-500 hover:cursor-pointer"
          onClick={() => {}}
        >
          Resume
        </span>
      </div>
    </div>
  );
}

export default NavBar;
