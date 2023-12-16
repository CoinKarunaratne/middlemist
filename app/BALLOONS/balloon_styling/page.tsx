import Image from "next/image";
import Footer from "../../components/Footer";
import LargeHeading from "../../components/ui/LargeHeading";
import Navbar from "../../components/ui/Navbar";
import Paragraph from "../../components/ui/Paragraph";
import { BalloonStyling } from "../../constants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-black">
      <Navbar />
      <div className="h-auto flex flex-col gap-16 align-middle items-center justify-center bg-[#FFEBEC] py-24">
        <div className="flex flex-col justify-center items-center gap-8 px-4 flex-1">
          <LargeHeading className="drop-shadow-2xl text-[#231F20]">
            Balloon Styling
          </LargeHeading>
          <Paragraph size="sm" className=" text-slate-600 text-center">
            Explore the Magic: Immerse yourself in a world of celebration and
            creativity with our curated collection of party themes. From
            enchanting birthdays to captivating movie-inspired gatherings,
            discover the perfect theme to elevate your next event. Let your
            imagination run wild as we bring your party dreams to life
          </Paragraph>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full p-8 gap-8 container justify-items-center">
          {BalloonStyling?.map((data: any, index: number) => {
            return (
              <div
                key={index}
                className="rounded overflow-hidden shadow-lg flex flex-col hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="relative">
                  <Image
                    width={1000}
                    height={1000}
                    className="object-cover aspect-square"
                    src={`/balloonStyling/${data.name}.jpg`}
                    alt={data as string}
                  ></Image>
                  <div className="hover:scale-110 transition duration-300 absolute bottom-0 top-0 right-0 left-0 scale-100"></div>
                </div>
                <div className="px-6 py-4 mb-auto  bg-white">
                  <h1 className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                    {data.name}
                  </h1>
                  <p className="text-gray-500 text-sm">{data.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
}
