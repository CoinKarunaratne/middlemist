"use client";

import React, { useState } from "react";
import { CarouselItems } from "../constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";

const MAX_VISIBILITY = 3;

const Card = ({
  title,
  content,
  background,
}: {
  title: string;
  content: string;
  background: string;
}) => (
  <div
    className={`card bg-[url('/${background}.jpg')] h-full flex justify-center items-center`}
  >
    <div className="flex flex-col items-center justify-center h-full">
      <LargeHeading className="mb-5 drop-shadow-2xl text-slate-500">
        {title}
      </LargeHeading>
      <Paragraph size="sm" className=" text-slate-700">
        {content}
      </Paragraph>

      <button className="c-button c-button--gooey mt-24">
        Discover now
        <div className="c-button__blobs">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
    </div>
  </div>
);

const Carousel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <ChevronLeft size={50} className=" text-slate-500" />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={
            {
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? 0 : 1,
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            } as any
          }
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <ChevronRight size={50} className=" text-slate-500" />
        </button>
      )}
    </div>
  );
};

const Tiles = () => {
  return (
    <div className="h-auto py-10 lg:py-0 lg:h-screen flex flex-col gap-28 align-middle items-center justify-center overflow-hidden bg-[#FFEBEC]">
      <div className="flex flex-col justify-center items-center gap-8 px-4">
        <LargeHeading className="drop-shadow-2xl text-[#231F20]">
          Featured Products
        </LargeHeading>
        <Paragraph size="sm" className=" text-slate-600">
          Discover our handpicked selection of featured products, curated to
          bring style and quality to your every need
        </Paragraph>
      </div>
      <div className="hidden lg:flex">
        <Carousel>
          {CarouselItems.map((card, i) => (
            <Card
              key={i}
              title={card.title}
              content={card.content}
              background={card.background}
            />
          ))}
        </Carousel>
      </div>
      <div className="flex flex-col gap-6 lg:hidden px-4">
        {CarouselItems.map((card, i) => (
          <div
            key={i}
            className={`bg-[url('/${card.background}.jpg')] h-full flex justify-center items-center w-full p-[2rem] rounded-xl`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <LargeHeading className="mb-5 drop-shadow-2xl text-slate-500">
                {card.title}
              </LargeHeading>
              <Paragraph size="sm" className=" text-slate-700">
                {card.content}
              </Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tiles;
