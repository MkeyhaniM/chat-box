// import background from "@public/assets/img/robot-background.png";

import {NavbarHome} from "@/src/components";

import "./globals.css";

export default function Home() {
  return (
    <section className="">
      <div className="bg-black h-screen relative flex flex-col gap-[160px]">
        <div>
          <NavbarHome />
        </div>
        <div className="text-white flex justify-center items-center flex-col z-10 gap-3">
          <h1 className="font-bold text-xl lg:text-5xl bg-gradient-to-r from-[#C939CB] via-[#bfacfcfa] to-[#6a84fdf4] bg-clip-text text-transparent">
            Chat Box Ai
          </h1>
          <h2 className="font-bold text-xl lg:text-6xl bg-gradient-to-r from-[#7500D1] via-[#bfacfcfa] to-[#C939CB] bg-clip-text text-transparent">
            Generator Image
          </h2>
          <p className="w-[600px] text-center">
            Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data
            security. Proof of Stake, its consensus algorithm enables unlimited speeds.
          </p>
          <button />
        </div>
        <div
          className="bg-cover w-full h-[600px] bg-no-repeat absolute bottom-0 left-0 -z-0"
          style={{backgroundImage: `url('./assets/img/robot-background.png')`}}
        />
      </div>
    </section>
  );
}
