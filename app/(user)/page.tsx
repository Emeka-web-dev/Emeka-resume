import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { AiOutlineArrowDown } from "react-icons/ai";

import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import {
  experienceQuery,
  pageInfoQuery,
  projectQuery,
  skillQuery,
  socialQuery,
} from "@/util/getQuery";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";

export const revalidate = 60;
export default async function Home() {
  const pageInfo: PageInfo = await client.fetch(pageInfoQuery);
  console.log({ pageInfo });
  const socials: Social[] = await client.fetch(socialQuery);
  const projects: Project[] = await client.fetch(projectQuery);
  const experiences: Experience[] = await client.fetch(experienceQuery);
  const skills: Skill[] = await client.fetch(skillQuery);
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#cc5223]/80 scrollbar-thin scroll-smooth">
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-center">
        <ContactMe pageInfo={pageInfo} />
      </section>
      {/* <Link href="#hero">
        <footer className="sticky bottom-2 w-full h-10  flex items-center justify-center">
          <div className="bg-[#cc5223] rounded-full p-[0.3rem]">
            <AiOutlineArrowDown className="w-7 h-7 " />
          </div>
        </footer>
      </Link> */}
      <ToastContainer autoClose={2000} position="top-center" />
    </div>
  );
}
