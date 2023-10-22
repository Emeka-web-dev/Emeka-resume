import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({experiences}: Props) {
  return (
    <div className="h-screen relative flex flex-col overflow-hidden text-left max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className=" uppercase tracking-[10px] text-gray-500 text-xl pt-5 md:pt-12">Experience</h3>
      <div className="w-full flex space-x-5 items-center justify-center overflow-x-auto p-2 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#cc5223]/80 scrollbar-thin">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
       
      </div>
    </div>
  );
}
