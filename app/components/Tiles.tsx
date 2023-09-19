"use client";

import { Featured } from "../constants";
import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";

const Tiles = () => {
  return (
    <section
      id="collection"
      className="h-auto py-28 flex flex-col gap-14 lg:gap-28 bg-[#FFEBEC] items-center"
    >
      <div className="flex flex-col justify-center items-center gap-8 px-4">
        <LargeHeading className="drop-shadow-2xl text-[#231F20]">
          Featured Products
        </LargeHeading>
        <Paragraph size="sm" className="hidden lg:inline-block text-slate-600">
          Discover our handpicked selection of featured products, curated to
          bring style and quality to your every need
        </Paragraph>
      </div>
      <div
        className={`hidden md:grid grid-cols-6 grid-rows-2 gap-4 w-full h-[80vw] xl:h-[50vw] px-20`}
      >
        <div className="sm:col-span-4">
          {" "}
          <div
            className={`flex flex-col bg-[url('/party-supplies.jpg')] items-center justify-center h-full bg-cover bg-center zoom-on-hover px-10`}
          >
            <LargeHeading className="mb-5 drop-shadow-2xl text-base text-[#9D9FA2] three-d-tiles">
              {Featured[0].title}
            </LargeHeading>
            <Paragraph
              size="sm"
              className="hidden lg:inline-block text-slate-700"
            >
              {Featured[0].content}
            </Paragraph>
          </div>
        </div>
        <div className="sm:col-span-2 sm:row-span-2">
          {" "}
          <div
            className={`flex flex-col bg-[url('/cake-topper.jpg')] px-10 items-center justify-center h-full bg-center bg-cover zoom-on-hover`}
          >
            <LargeHeading className="mb-5 drop-shadow-2xl text-[#9D9FA2] three-d-tiles">
              {Featured[1].title}
            </LargeHeading>
            <Paragraph
              size="sm"
              className="hidden lg:inline-block text-slate-700"
            >
              {Featured[1].content}
            </Paragraph>
          </div>
        </div>
        <div className="sm:col-span-2 sm:row-span-1">
          {" "}
          <div
            className={`flex flex-col bg-[url('/DIY-Balloons.png')] px-10 items-center justify-center h-full bg-center bg-cover zoom-on-hover`}
          >
            <LargeHeading className="mb-5 drop-shadow-2xl text-[#9D9FA2] three-d-tiles">
              {Featured[2].title}
            </LargeHeading>
            <Paragraph
              size="sm"
              className="hidden lg:inline-block text-slate-700"
            >
              {Featured[2].content}
            </Paragraph>
          </div>
        </div>
        <div className="sm:col-span-2 sm:row-span-1">
          {" "}
          <div
            className={`flex flex-col bg-[url('/party-styling.jpg')] px-10 items-center justify-center h-full bg-center bg-cover zoom-on-hover`}
          >
            <LargeHeading className="mb-5 drop-shadow-2xl text-[#9D9FA2] three-d-tiles">
              {Featured[3].title}
            </LargeHeading>
            <Paragraph
              size="sm"
              className="hidden lg:inline-block text-slate-700"
            >
              {Featured[3].content}
            </Paragraph>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-[100vw] px-2 md:hidden">
        <div className="col-span-1">
          {" "}
          <div
            className={`flex flex-col bg-[url('/cake-topper.jpg')] items-center justify-center h-full bg-center bg-cover zoom-on-hover`}
          >
            <LargeHeading
              size="sm"
              className="mb-5 drop-shadow-2xl text-[#9D9FA2] three-d-tiles"
            >
              {Featured[1].title}
            </LargeHeading>
          </div>
        </div>
        <div className="col-span-1">
          {" "}
          <div
            className={`flex flex-col bg-[url('/DIY-Balloons.png')] items-center justify-center h-full bg-center bg-cover zoom-on-hover`}
          >
            <LargeHeading
              size="sm"
              className="mb-5 drop-shadow-2xl text-[#9D9FA2] three-d-tiles"
            >
              {Featured[2].title}
            </LargeHeading>
          </div>
        </div>
        <div className="col-span-1">
          {" "}
          <div
            className={`flex flex-col bg-[url('/party-styling.jpg')] items-center justify-center h-full bg-center bg-cover zoom-on-hover`}
          >
            <LargeHeading
              size="sm"
              className="mb-5 drop-shadow-2xl text-[#9D9FA2] three-d-tiles"
            >
              {Featured[3].title}
            </LargeHeading>
          </div>
        </div>
        <div className="col-span-3 row-span-1">
          {" "}
          <div
            className={`flex flex-col bg-[url('/party-supplies.jpg')] items-center justify-center h-full bg-cover bg-center zoom-on-hover`}
          >
            <LargeHeading className="mb-5 drop-shadow-2xl text-[#9D9FA2] three-d-tiles">
              {Featured[0].title}
            </LargeHeading>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tiles;
