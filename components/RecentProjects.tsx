import React from "react";
import Heading from "./ui/Heading";
import dynamic from "next/dynamic";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import Image from "next/image";
// import { PinContainer, PinPerspective } from "";
const PinPerspective = dynamic(
  () => import("./ui/pin").then((mod) => mod.PinPerspective),
  { ssr: false }
);

// Dynamically import PinContainer
const PinContainer = dynamic(
  () => import("./ui/pin").then((mod) => mod.PinContainer),
  { ssr: false }
);
const RecentProjects: React.FC = () => {
  return (
    <section className="py-20" id="recentprojects">
      <Heading normal={"A small selection of"} purble={"recent projects"} />
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">

        <div className=" sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
          <PinContainer href="http://placeholder.com" title="this is link">
            <div className="relative flex items-center flex-col justify-center sm:w-96 w-[80vw] overflow-hidden  mb-10">
              <Image
                src="/Gericht.png"
                className=" object-cover"
                alt={"test"}
                width={500}
                height={500}
              />
              <div className=" p-4">
                <h2 className=" font-bold text-2xl ">
                  3D Solar System Planets to Explore
                </h2>
                <p className=" opacity-50 text-sm">
                  Explore the wonders of our solar system with this captivating
                  3D simulation of the planets using Three.js
                </p>
              </div>
            </div>
          </PinContainer>
        </div>
        <div className=" sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
          <PinContainer href="http://placeholder.com" title="this is link">
            <div className="relative flex items-center flex-col justify-center sm:w-96 w-[80vw] overflow-hidden  mb-10">
              <Image
                src="/Gericht.png"
                className=" object-cover"
                alt={"test"}
                width={500}
                height={500}
              />
              <div className=" p-4">
                <h2 className=" font-bold text-2xl ">
                  3D Solar System Planets to Explore
                </h2>
                <p className=" opacity-50 text-sm">
                  Explore the wonders of our solar system with this captivating
                  3D simulation of the planets using Three.js
                </p>
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
