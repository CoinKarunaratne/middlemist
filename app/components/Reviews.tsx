"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { reviews } from "../constants";
import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";

export default function Reviews() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 762 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 762, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="flex justify-center h-auto bg-[#FFEBEC]">
      <div className="container h-auto flex flex-col gap-24 py-48 px-4">
        <div className="flex flex-col justify-center items-center gap-8 px-4">
          <LargeHeading className="drop-shadow-2xl text-[#231F20]">
            Reviews
          </LargeHeading>
          <Paragraph size="sm" className=" text-slate-600 text-center">
            Each box is a treasure trove of carefully curated party items,
            ensuring your events theme is flawlessly executed. From whimsical to
            elegant, our Party Boxes make party planning a breeze, delivering
            all you need in one enchanting package
          </Paragraph>
        </div>
        <div className="glass flex justify-center p-12 lg:p-16 xl:p-32">
          <Carousel
            responsive={responsive}
            swipeable={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            className="w-full"
          >
            {reviews.map((review, array) => {
              return (
                <div
                  key={array}
                  className="p-8 glass-card mx-2 h-52 xl:h-80 flex justify-center items-center flex-col"
                >
                  <div>
                    <p className="text-sm sm:text-base text-[#231F20]">
                      {review.description}
                    </p>
                    <p className="text-right text-sm sm:text-base text-[#231F20] font-bold">
                      {review.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
