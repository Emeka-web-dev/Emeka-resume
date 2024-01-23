import Image from "next/image";
import FramerContainer from "./FramerContainer";
import { Experience } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";
type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-full md:w-[400px] h-[88%] snap-center bg-[#292929] hover:opacity-100 opacity-70 cursor-pointer mb-10 p-5 transition-opacity duration-200 overflow-hidden">
      <FramerContainer
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-28 h-28 xl:w-[200px] xl:h-[200px]"
      >
        <Image
          src={urlForImage(experience.companyImage).url()}
          alt="card image"
          layout="fill"
          className="object-cover rounded-full"
        />
      </FramerContainer>
      <div className="px-0 md:px-8 flex flex-col space-y-4">
        <div className="text-center space-y-2">
          <h4 className="text-3xl font-light uppercase">
            {experience.company}
          </h4>
          <p className="font-bold text-xl ">{experience.jobTitle}</p>
        </div>
        <ul className="list-disc space-y-2 ml-5 text-sm">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
