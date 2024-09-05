import React from "react";
import Heading from "./ui/Heading";
import dynamic from "next/dynamic";
import Image from "next/image";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import { RecentProjectTabs } from "./ui/recent-project-tab";
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
      <RecentProjectTabs />
      {/* <div className="grid grid-cols-1 md:grid-cols-2  gap-8 md:gap-10 lg:gap-14 mt-10 justify-between">
        {projects.map((item) => (
          <div key={item.id} className="w-full">
            <PinContainer title={item.pinTitle ?? ""} href={item.link}>
              <div className="w-full h-full">
                <Image
                  src={item.img}
                  className="object-cover rounded-lg"
                  alt={"test"}
                  width={600}
                  height={550}
                />
                <div className="p-4">
                  <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h2>
                  <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD] mt-3">
                    {item.des}
                  </p>
                </div>
                <div className="p-4 w-full flex items-center justify-between">
                  <div className="mt-3 flex -space-x-2 overflow-hidden">
                    {item.iconLists.map((icon, idx) => (
                      <Image
                        key={idx + 1}
                        width={35}
                        height={24}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        src={icon}
                        alt={icon}
                      />
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default RecentProjects;
