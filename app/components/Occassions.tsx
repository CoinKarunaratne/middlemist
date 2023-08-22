import { FC } from "react";
import { Events } from "../constants/index";

const Occassions: FC = ({}) => {
  return (
    <>
      <h1 className="text-black text-2xl w-full underline text-center mt-5">
        FEATURED OCCASIONS
      </h1>
      <div className="grid grid-flow-col w-full p-8 gap-4">
        {Events.map((data, index) => (
          <div
            key={index}
            className="bg-[url('/events.jpg')] h-80 flex justify-center items-center text-black font-bold text-2xl"
          >
            <p>{data.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Occassions;
