import {Julius_Sans_One} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import React from "react";

const JuliusSansOne: NextFont = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400",
});

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <section className="flex h-svh">
        <div className={`w-1/2 ${JuliusSansOne.className}`}>{children}</div>
        <div
          className="w-1/2 h-full bg-cover bg-no-repeat"
          style={{backgroundImage: "url('/assets/img/generatored.png')"}}
        />
      </section>
    </>
  );
};

export default layout;
