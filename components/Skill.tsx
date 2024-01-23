import { motion } from "framer-motion";
import Image from "next/image";
import FramerContainer from "./FramerContainer";
import { urlForImage } from "@/sanity/lib/image";
import { Image as SkillImage } from "@/typings";

type Props = {
  image: SkillImage;
  number: number;
  total: number;
};
const Skill = ({ image, number, total }: Props) => {
  const isNumber = Math.ceil(total / 2) > number;
  console.log({ isNumber });
  return (
    <FramerContainer
      initial={{
        opacity: 0,
        x: isNumber ? -200 : 200,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="group relative flex cursor-pointer grayscale"
    >
      <div className="relative w-16 md:w-20 h-16 md:h-20 group-hover:grayscale-0 transition duration-300 ease-in-out filter">
        <Image
          src={urlForImage(image).url()}
          alt="image"
          layout="fill"
          className="object-cover"
        />
      </div>
    </FramerContainer>
  );
};

export default Skill;
