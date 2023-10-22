"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillProps } from "@/typings";
type Props = {
  skills: SkillProps[];
}
const Skills = ({skills}: Props) => {
  return (
    <motion.div className="h-screen flex flex-col text-center md:text-left max-w-[2000px] lg:px-10 items-center snap-center">
      <h3 className="uppercase tracking-[10px] text-xl text-gray-500 pt-16">
        skill
      </h3>
      <h3 className="uppercase text-md tracking-[3px] text-gray-500 hidden sm:block">
        hover over a skill for current proficiency
      </h3>
      <div className="w-full h-[70%] flex items-center justify-center">
        <div className="grid grid-cols-4 gap-4">
          {skills.map((skill) => (
            <Skill key={skill.title} image={skill.image} progress={skill.progress} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
