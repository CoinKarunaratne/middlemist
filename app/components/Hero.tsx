"use client";

import { FC } from "react";
import Navbar from "./ui/Navbar";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <main className="flex flex-col items-center justify-center mb-10">
      <Navbar />
      <div className="xl:pb-0 w-[90vw] bg-no-repeat mx-auto bg-image bg-[url('/background-3.jpg')] relative">
        <Image
          src="/background-3.jpg"
          width={2000}
          height={1000}
          alt="background"
          className="img-hidden"
        />
      </div>
    </main>
  );
};

export default Hero;
