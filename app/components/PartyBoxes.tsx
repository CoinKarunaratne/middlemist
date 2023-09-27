"use client";

import { FC, useState } from "react";
import { PartyBox } from "../constants/index";
import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";
import Image from "next/image";

const PartyBoxes: FC = ({}) => {
  const [showAll, setShowAll] = useState(false);

  const visiblePartyBoxes = showAll ? PartyBox : PartyBox.slice(0, 3);

  return (
    <section id="party-boxes">
      <div className="h-auto flex flex-col gap-16 align-middle items-center justify-center bg-[#FFEBEC] pt-24">
        <div className="flex flex-col justify-center items-center gap-8 px-4">
          <LargeHeading className="drop-shadow-2xl text-[#231F20]">
            Party Boxes
          </LargeHeading>
          <Paragraph size="sm" className=" text-slate-600 text-center">
            Each box is a treasure trove of carefully curated party items,
            ensuring your events theme is flawlessly executed. From whimsical to
            elegant, our Party Boxes make party planning a breeze, delivering
            all you need in one enchanting package
          </Paragraph>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 w-full p-8 gap-4 container justify-items-center">
          {visiblePartyBoxes.map((data, index) => (
            <div
              key={index}
              className={`relative overflow-hidden md:w-auto cursor-pointer`}
            >
              <Image
                width={1000}
                height={1000}
                className="object-cover rounded-[25px]"
                src={`/partyBoxes/${data.name}.png`}
                alt={data.name}
              />
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="flex align-middle justify-center mb-12">
            <button
              className="show-more text-slate-500"
              onClick={() => setShowAll(true)}
            >
              {" "}
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PartyBoxes;
