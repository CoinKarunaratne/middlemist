import { FC } from "react";
import Image from "next/image";
import { MenuItems } from "../constants";

const Hero: FC = () => {
  return (
    <>
      {" "}
      <div className="p-5 flex flex-row w-full">
        <div className="flex-grow flex justify-center items-center">
          <Image src="/Circular Logo.svg" alt="Logo" width={100} height={100} />
        </div>
        <div>
          <h1 className="text-black">Search</h1>
        </div>
      </div>
      <div className="flex flex-row gap-8 my-5 justify-center">
        {MenuItems.map((content, position) => (
          <h1 className="text-black" key={position}>
            {content.name}
          </h1>
        ))}
      </div>
      <div>
        <Image
          src="/background.jpg"
          alt="background-image"
          width={10000}
          height={10000}
        />
      </div>
    </>
  );
};

export default Hero;
