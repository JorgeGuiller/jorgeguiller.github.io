import NavBar from "@/components/common/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen w-full bg-gradient-primary items-center">
      <NavBar />
      <div className="flex w-full px-20">
        <div className="flex w-full p-[120px] bg-gradient-secondary rounded-[20px]">
          <div className="flex flex-row w-full justify-between items-center gap-8">
            <div className="flex flex-col justify-center items-center max-w-[600px] text-justify">
              <span className="text-accent text-[45px] font-bold">
                Hello, World
              </span>
              <span className="text-text text-[20px] font-regular">
                dipota ka jorge dipota ka jorge dipota ka jorge dipota ka jorge
                dipota ka jorge dipota ka jorge dipota ka jorge dipota ka jorge
                dipota ka jorge dipota ka jorge dipota ka jorge dipota ka jorge
              </span>
            </div>
            <Image src="/popup.jpg" alt="popup" width={600} height={600} />
          </div>
        </div>
      </div>
    </main>
  );
}
