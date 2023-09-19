"use client";

import { FC } from "react";

import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";
import Navbar from "./ui/Navbar";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <main className="flex flex-col items-center justify-center mb-10">
      <Navbar />
      <div className="xl:pb-0 w-[90vw] bg-no-repeat mx-auto bg-image bg-[url('/background-3.jpg')]">
        <img src="/background-3.jpg" alt="background" className="img-hidden" />

        <a href="#collection" className="mb-20 absolute left-[40vw] top-[60vh]">
          <button className="mt-24 comic-button self-center text-xl md:text-2xl lg:text-2xl xl:w-[15vw]">
            See our collection
          </button>
        </a>
      </div>
    </main>
  );
};

export default Hero;
