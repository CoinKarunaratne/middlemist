import Image from "next/image";
import Footer from "../components/Footer";
import LargeHeading from "../components/ui/LargeHeading";
import Navbar from "../components/ui/Navbar";
import Paragraph from "../components/ui/Paragraph";
import { MenuItems } from "../constants";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-black">
      <Navbar />
      <div className="h-auto flex flex-col gap-16 align-middle items-center justify-center bg-[#FFEBEC] py-24">
        <div className="flex flex-col justify-center items-center gap-8 px-4 flex-1">
          <LargeHeading className="drop-shadow-2xl text-[#231F20]">
            Balloons
          </LargeHeading>
          <Paragraph size="sm" className=" text-slate-600 text-center">
            Welcome to our enchanting world of balloons, where your celebrations
            take flight with a burst of color, fun, and magic. At Middlemist
            Events, we offer a dazzling array of balloons that are sure to make
            your parties and special occasions extra special.
          </Paragraph>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full p-8 gap-4 container justify-items-center">
          {MenuItems[1]?.dropdownItems?.map((data: any, index) => {
            const words = data.split(" ");
            const transformedString = words
              .map((word: string) => word.toLowerCase())
              .join("_");
            let description: string = "";
            if (data === "Foil Balloons") {
              description =
                "Dazzle your guests with our collection of foil balloons. These balloons are the epitome of shimmering elegance, adding a touch of glamour to your celebrations. With various shapes, sizes, and captivating designs, our foil balloons are perfect for making your special moments truly shine.";
            } else if (data === "DIY Balloons") {
              description =
                "Welcome to our DIY Balloons section, where your creativity takes center stage. Whether you're planning a special event or just looking for a fun and personalized way to decorate, our DIY balloons give you the power to transform your vision into reality.";
            } else if (data === "Balloon Styling") {
              description =
                "Welcome to our Balloon Styling section, where we turn your celebrations into works of art. Our team of expert stylists is dedicated to transforming your events into unforgettable experiences through the power of balloons.";
            }
            return (
              <Link
                href={`/BALLOONS/${transformedString as URL}`}
                key={index}
                className={`relative overflow-hidden md:w-auto cursor-pointer mb-10 transform duration-500 hover:-translate-y-2 bg-white pb-8 rounded-xl`}
              >
                <Image
                  width={1000}
                  height={1000}
                  className="object-cover aspect-square"
                  src={`/Balloons/${data}.jpeg`}
                  alt={data as string}
                />
                <div className="flex flex-col gap-10 mt-10">
                  <div className="self-center">
                    <h1 className=" text-4xl text-center lg:text-left font-extrabold leading-tight tracking-tighter text-[#231F20]">
                      {data as string}
                    </h1>
                  </div>

                  <p className="text-slate-600 text-sm text-center h-32 mx-5">
                    {description}
                  </p>
                  <button className="shop-now-button w-[80%] self-center">
                    SHOP NOW
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
}
