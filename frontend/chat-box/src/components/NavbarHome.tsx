import Link from "next/link";
import {Audiowide, Barlow} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";

import {Github, Linkedin, Medium, Menu, X} from "../icons";

const audiowide: NextFont = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

const barlow: NextFont = Barlow({
  subsets: ["latin"],
  weight: "400",
});

const NavbarHome = () => {
  return (
    <>
      <div className="flex justify-between p-5 md:hidden items-center">
        <h3 className={`${audiowide.className} text-2xl text-white`}>Chat Box Ai</h3>
        <div>
          <Menu />
        </div>
      </div>
      <div className="text-white flex flex-col md:flex-row w-full -translate-x-[500px] md:w-full md:translate-x-0 justify-around h-svh md:max-h-[80px] md:justify-between lg:justify-around md:p-4 lg:pt-10 items-center">
        <h3 className={`${audiowide.className} hidden md:block text-base md:text-base lg:text-2xl`}>
          Chat Box Ai
        </h3>
        <div
          className={`${barlow.className} text-xl md:text-base lg:text-xl flex gap-4 flex-col md:flex-row`}
        >
          <Link href={"/"}>Contact us</Link>
          <Link href={"/"}>About us</Link>
          <Link href={"/"}>Dashboard</Link>
          <Link href={"/"}>Ai Box</Link>
          <Link href={"/"}>Generate Image</Link>
        </div>
        <div className="flex gap-3">
          <Link href={"/"}>
            <Github />
          </Link>
          <Link href={"/"}>
            <Linkedin />
          </Link>
          <Link href={"/"}>
            <Medium />
          </Link>
          <Link href={"/"}>
            <X />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarHome;
