import { motion } from "framer-motion";
import Image from "next/image";
import FramerContainer from "./FramerContainer";
import { urlForImage } from "@/sanity/lib/image";
import { Image as SkillImage } from "@/typings";

type Props = {
  image: SkillImage;
  progress: number;
};
const Skill = ({ image, progress }: Props) => {
  return (
    <FramerContainer
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="group relative flex cursor-pointer"
    >
      <div className="relative w-16 md:w-20 h-16 md:h-20 group-hover:grayscale transition duration-300 ease-in-out filter">
        <Image
          src={urlForImage(image).url()}
          alt="image"
          layout="fill"
          className="object-cover  p-3"
        />
      </div>
      {/* <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white z-0 h-16 w-16 md:w-20 md:h-20 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className="text-black font-bold opacity-100 md:text-xl">
            {progress}
          </p>
        </div>
      </div> */}
    </FramerContainer>
  );
};

export default Skill;
