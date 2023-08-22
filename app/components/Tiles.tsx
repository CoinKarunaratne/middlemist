import { FC } from "react";
import { MenuItems } from "../constants";

const Tiles: FC = ({}) => {
  return (
    <div className="grid grid-flow-col grid-rows-2 w-full p-8 gap-4">
      {MenuItems.map((data, index) => (
        <div
          key={index}
          className="bg-[url('/pastel.jpg')] h-80 flex justify-center items-center text-black font-bold text-2xl"
        >
          <p>{data.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Tiles;
