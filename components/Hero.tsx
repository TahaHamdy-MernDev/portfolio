import React from "react";
const Spotlight = dynamic(() => import("@/components/ui/Spotlight"), {
  ssr: false,
});

import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import dynamic from "next/dynamic";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Hero: React.FC = () => {
  const words = [
    { text: "React & Node.js" },
    { text: "MongoDB & Express.js" },
    { text: "JavaScript & TypeScript" },
    { text: "Responsive Web Design" },
    { text: "API Development & Integration" },
    { text: "Performance Optimization" },
    { text: "Chakra UI & Tailwind CSS" },
  ];
  return (
    <div className=" pb-20 pt-36">
      <div>
        <Spotlight
          className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className=" top-10 left-full h-[90vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className=" top-28 left-80 h-[80vh] w-[80vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className=" max-w-[89vw] md:max-w-3xl lg:max-w-[90vw] flex flex-col items-center justify-center">
          <h2 className="flex justify-center items-center gap-1 flex-wrap uppercase tracking-widest text-sm text-center text-blue-100 max-w-80 md:max-w-full">
          Transforming Ideas into Reality with{" "}
            <TypewriterEffectSmooth words={words} className="text-sm text-purple" />
          </h2>
          <TextGenerateEffect
            className=" text-center text-[40px] md:text-6xl lg:text-7xl"
            words="Transforming Concepts into Seamless Digital Experiences"
          />
          <p className=" text-center md:tracking-wider mb-4 text-sm md:text-md lg:text-lg">
            Hi! I’m Taha, a MERN Stack & Next.js Developer based in Egypt.
          </p>

          <a href="#about">
            <MagicButton
              title={"See my work"}
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
