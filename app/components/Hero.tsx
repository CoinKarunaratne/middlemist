"use client";

import { FC } from "react";
import Navbar from "./ui/Navbar";

const Hero: FC = () => {
  return (
    <main className="flex flex-col items-center justify-center mb-10">
      <Navbar />
      <div className="xl:pb-0 w-[90vw] bg-no-repeat mx-auto bg-image bg-[url('/background-3.jpg')] relative">
        <img src="/background-3.jpg" alt="background" className="img-hidden" />
      </div>
    </main>
  );
};

export default Hero;
