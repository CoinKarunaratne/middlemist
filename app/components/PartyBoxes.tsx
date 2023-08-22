import { FC } from "react";
import { PartyBox } from "../constants/index";

const PartyBoxes: FC = ({}) => {
  return (
    <>
      <h1 className="text-black text-2xl w-full underline text-center mt-5">
        PARTY BOXES
      </h1>
      <p className="w-full text-center px-10 mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor
        deleniti nostrum perferendis modi exercitationem possimus dolores
        maiores inventore autem, doloremque porro eveniet, odit quaerat amet,
        voluptatem velit et eos?
      </p>
      <div className="grid grid-flow-col  grid-rows-2 w-full p-8 gap-4">
        {PartyBox.map((data, index) => (
          <div
            key={index}
            className="bg-[url('/boxes.jpg')] h-80 flex justify-center items-center text-black font-bold text-2xl"
          >
            <p>{data.name}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        {" "}
        <button className="text-xl border-2 border-black text-center h-14 w-72">
          Show More
        </button>
      </div>
    </>
  );
};

export default PartyBoxes;
