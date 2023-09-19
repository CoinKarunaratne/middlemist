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
      <div className="xl:pb-0 w-[90vw] bg-no-repeat mx-auto bg-image bg-[url('/background-3.jpg')] relative">
        <img src="/background-3.jpg" alt="background" className="img-hidden" />

        <a
          href="#collection"
          className="mb-20 hidden xl:inline absolute left-[35vw] bottom-0"
        >
          <button className="mt-24 comic-button self-center xl:w-[20vw]">
            See our collection
          </button>
        </a>
      </div>
    </main>
  );
};

export default Hero;
