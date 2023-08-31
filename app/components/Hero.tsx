"use client";

import { FC } from "react";

import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";
import Navbar from "./ui/Navbar";

const Hero: FC = () => {
  return (
    <main className="relative h-screen flex flex-col items-center justify-center overflow-x-hidden">
      <Navbar />
      <div className="pt-32 w-full mx-auto h-full bg-cover bg-[url('/background-3.jpg')]">
        <div className="container max-w-7xl w-full mx-auto h-full">
          <div className="h-full gap-6 flex flex-col justify-center items-center">
            <LargeHeading
              size="lg"
              className="three-d text-[#FF776B] dark:text-light-gold self-center"
            >
              Middlemist Events
            </LargeHeading>

            <Paragraph className="max-w-xl font-semibold drop-shadow text-[#9D9FA2] mt-5 self-center">
              Elevate your events with our vibrant balloons and wide range of
              party essentials, making every moment a cherished memory
            </Paragraph>
            <button className="mt-24 comic-button self-center text-xl md:text-2xl lg:text-2xl">
              See our collection
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
