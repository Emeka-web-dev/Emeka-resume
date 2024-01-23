import { Social } from "@/typings";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import FramerContainer from "./FramerContainer";
import { AiOutlineMail } from "react-icons/ai";

type Props = {
  socials: Social[];
};
function Header({ socials }: Props) {
  return (
    <header className="fixed right-0 left-0 top-0 flex items-center justify-between max-w-5xl mx-auto z-20 xl:items-center py-1 px-4">
      <FramerContainer
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social.title}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </FramerContainer>

      <FramerContainer
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="text-gray-300"
      >
        <Link
          href="#contact"
          className="flex items-center justify-center gap-2"
        >
          <AiOutlineMail className="w-6 h-6" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch
          </p>
        </Link>
      </FramerContainer>
    </header>
  );
}

export default Header;
