"use client";

import Link from "next/link";
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
        className={`hidden md:grid grid-cols-6 grid-rows-2 gap-4 w-full h-[80vw] xl:h-[50vw] px-5 lg:px-10 xl:px-20`}
      >
        <Link href="/PARTY_SUPPLIES" className="sm:col-span-4 card-zoom">
          {" "}
          <div
            className={`bg-[url('/party-supplies.jpg')] card-zoom-image-party-supplies`}
          ></div>
          <h1
            style={{ textAlign: "center" }}
            className="mb-5 card-zoom-text text-slate-500 text-center lg:text-left font-extrabold leading-tight tracking-tighter text-3xl"
          >
            Party Supplies
          </h1>
        </Link>
        <Link
          href="/PARTY_SUPPLIES/cake_topper"
          className="sm:col-span-2 sm:row-span-2 card-zoom"
        >
          {" "}
          <div className={`bg-[url('/cake-topper.jpg')] card-zoom-image`}></div>
          <h1
            style={{ textAlign: "center" }}
            className="mb-5 top-20 card-zoom-text drop-shadow-2xl text-slate-500 text-center lg:text-left font-extrabold leading-tight tracking-tighter text-3xl"
          >
            Cake <br /> Topper
          </h1>
        </Link>
        <Link
          href="/BALLOONS/diy_balloons"
          className="sm:col-span-2 sm:row-span-1 card-zoom"
        >
          {" "}
          <div
            className={`bg-[url('/DIY-Balloons.png')] card-zoom-image`}
          ></div>
          <h1
            style={{ textAlign: "center" }}
            className="mb-5 card-zoom-text drop-shadow-2xl text-slate-500 text-center lg:text-left font-extrabold leading-tight tracking-tighter text-3xl"
          >
            DIY Balloons
          </h1>
        </Link>
        <Link
          href="/BALLOONS/balloon_styling"
          className="sm:col-span-2 sm:row-span-1 card-zoom"
        >
          {" "}
          <div
            className={`bg-[url('/party-styling.jpg')] card-zoom-image`}
          ></div>
          <h1
            style={{ textAlign: "center" }}
            className="mb-5 card-zoom-text drop-shadow-2xl text-slate-500 text-center lg:text-left font-extrabold leading-tight tracking-tighter text-3xl"
          >
            Party Styling
          </h1>
        </Link>
      </div>
      {/* mobile */}
      <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-[100vw] px-2 md:hidden">
        <div className="col-span-1">
          {" "}
          <div
            className={`flex flex-col bg-[url('/cake-topper.jpg')] items-center justify-center h-full bg-center bg-cover relative`}
          >
            <h1
              style={{ textAlign: "center" }}
              className="mb-5 absolute top-10 card-zoom-text text-slate-500 text-center lg:text-left font-extrabold leading-tight tracking-tighter text-lg"
            >
              Cake Topper
            </h1>
          </div>
        </div>
        <div className="col-span-1">
          {" "}
          <div
            className={`flex flex-col bg-[url('/DIY-Balloons.png')] items-center justify-center h-full bg-center bg-cover relative`}
          >
            <h1
              style={{ textAlign: "center" }}
              className="mb-5 absolute top-10 card-zoom-text text-[#231f20] text-center lg:text-left font-extrabold leading-tight tracking-tighter text-lg"
            >
              DIY Balloons
            </h1>
          </div>
        </div>
        <div className="col-span-1">
          {" "}
          <div
            className={`flex flex-col bg-[url('/party-styling.jpg')] items-center justify-center h-full bg-center bg-cover relative`}
          >
            <h1
              style={{ textAlign: "center" }}
              className="mb-5 absolute top-10 card-zoom-text text-[#231f20] text-center lg:text-left font-extrabold leading-tight tracking-tighter text-lg"
            >
              Party Styling
            </h1>
          </div>
        </div>
        <div className="col-span-3 row-span-1">
          {" "}
          <div
            className={`flex flex-col bg-[url('/party-supplies.jpg')] items-center justify-center h-full bg-cover bg-top`}
          >
            <h1
              style={{ textAlign: "center" }}
              className="mb-5 card-zoom-text text-[#231f20] text-center lg:text-left font-extrabold leading-tight tracking-tighter text-xl"
            >
              Party Supplies
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tiles;
