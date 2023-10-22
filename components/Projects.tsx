import { urlForImage } from "@/sanity/lib/image";
import { Project } from "@/typings";
import Image from "next/image";
import FramerContainer from "./FramerContainer";
import Link from "next/link";

type Props = {
  projects: Project[];
};
const Projects = ({ projects }: Props) => {
  return (
    <FramerContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left max-w-full px-10 mx-auto items-center pb-10 md:pb-12"
    >
      <h3 className=" uppercase tracking-[10px] text-gray-500 text-xl pt-16">
        projects
      </h3>
      <div className="w-full absolute top-[35%] left-0 h-[300px] bg-[#cc5223]/20 -skew-y-12" />
      <div className="w-full h-[83%] flex items-center justify-center overflow-x-auto snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#cc5223]/80 scrollbar-thin">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center"
          >
            <Link href={project.linkToBuild} target="_blank">
              <div className="relative w-[20rem] h-[13rem] md:w-[30rem] md:h-[18rem]">
                <Image
                  src={urlForImage(project.image).url()}
                  alt="project"
                  layout="fill"
                  className="object-contain"
                />
              </div>
            </Link>
            <div className="max-w-4xl space-y-5">
              <h4 className="text-3xl font-semibold text-center">
                {project.title}
              </h4>
              <p className="text-center md:text-left">{project.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </FramerContainer>
  );
};

export default Projects;
