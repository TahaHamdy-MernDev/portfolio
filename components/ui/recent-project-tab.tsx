"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { Tabs } from "../ui/tabs";
import { projects } from "@/data";
import { PinContainer } from "./pin";

const categories = ["All", "frontend", "backend", "mern"];

export function RecentProjectTabs() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProjects = (category) => {
    return projects.filter((project) =>
      category === "All" ? true : project.category === category
    );
  };

  const tabs = categories.map((category) => ({
    title: category.charAt(0).toUpperCase() + category.slice(1),
    value: category,
    content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 mt-10 justify-between  bg-black-100">
          {filterProjects(category).map((item) => (
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
        </div>
      
    ),
  }));

  return (
    <div className="h-[20rem] md:h-[80rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs
        tabs={tabs}
        containerClassName="mb-4"
        activeTabClassName="bg-gray-200 dark:bg-zinc-800"
        tabClassName="text-lg"
        contentClassName="p-4"
      />
   </div>
  );
}
