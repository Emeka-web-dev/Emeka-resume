import Image from "next/image";
import FramerContainer from "./FramerContainer";
import { PageInfo } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";
type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <FramerContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col text-center md:text-left max-w-6xl px-6 mx-auto items-center gap-y-6"
    >
      <h3 className="pt-12 uppercase tracking-[10px] text-gray-500 text-xl">
        About
      </h3>
      <div className="flex flex-col h-full md:flex-row items-center md:justify-center gap-4 gap-y-10">
        <FramerContainer
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative w-48 h-48 flex-shrink-0 md:w-64 md:h-96 lg:w-[350px] lg:h-[420px] lg:mt-10"
        >
          <Image
            src={urlForImage(pageInfo.profilePic).url()}
            alt="about image"
            layout="fill"
            className="object-cover rounded-full md:rounded-lg"
          />
        </FramerContainer>
        <div className="space-y-2 md:space-y-4 px-0 md:px-8">
          <h4 className="text-2xl font-semibold">
            Here is a little background
          </h4>
          <p className="overflow-y-auto max-h-[90%] scrollbar-track-gray-400/20 scrollbar-thumb-[#cc5223]/80 scrollbar-thin">
            {pageInfo.backgroundInfo}
          </p>
        </div>
      </div>
    </FramerContainer>
  );
}
