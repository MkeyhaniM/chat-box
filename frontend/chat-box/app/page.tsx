import {Geist_Mono} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";

const GeistMono: NextFont = Geist_Mono({
  subsets: ["latin"],
  weight: "400",
});

import {Button, NavbarHome} from "@/src/components";
import "./globals.css";

export default function Home() {
  return (
    <section className="">
      <div className="h-screen relative flex flex-col sm:gap-[50px] md:gap-[210px] lg:gap-[160px] overflow-y-hidden">
        <div>
          <NavbarHome />
        </div>
        <div className="flex justify-center items-center flex-col z-10 gap-5 px-2 lg:px-0">
          <h1 className="font-bold sm:text-3xl text-xl lg:text-5xl bg-gradient-to-r from-[#C939CB] via-[#bfacfcfa] to-[#6a84fdf4] bg-clip-text text-transparent">
            Chat Box Ai
          </h1>
          <h2 className="font-bold text-xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-[#7500D1] via-[#bfacfcfa] to-[#C939CB] bg-clip-text text-transparent ">
            Generator Image
          </h2>
          <p
            className={`text-sm lg:w-[750px] text-center md:text-base lg:text-lg ${GeistMono.className} bg-gradient-to-r from-[#6a84fdf4] to-[#bfacfcfa] bg-clip-text text-transparent `}
          >
            Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data
            security. Proof of Stake, its consensus algorithm enables unlimited speeds.
          </p>
          <Button
            name="get started"
            styleClass={`bg-gradient-to-r from-[#7500D1] to-[#C939CB] py-2 px-5 lg:py-3 lg:px-8 lg:text-xl rounded-full transition duration-500 pointer cursor-pointer ${GeistMono.className}`}
          />
        </div>
        <div
          className="bg-cover w-full h-[120px] lg:h-[300px] xl:h-[500px] 2xl:h-[600px] bg-no-repeat absolute bottom-0 left-0 -z-0 select-none"
          style={{backgroundImage: `url('./assets/img/robot-background.png')`}}
        />
      </div>
    </section>
  );
}
