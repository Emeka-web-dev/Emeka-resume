"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  pageInfo: PageInfo;
}
function Hero({pageInfo}: Props) {
  const [text] = useTypewriter({
    words: pageInfo.heroMessage,
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative w-36 h-36">
        <Image
          src={urlForImage(pageInfo.heroImage).url()}
          alt="image"
          layout="fill"
          className="object-cover rounded-full"
        />
      </div>
      <div className="z-20">
        <h2 className="uppercase text-sm text-gray-500 pb-2 tracking-[15px]">
         {pageInfo.role}
        </h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#cc5223" />
        </h1>
        <div className="pt-2">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
