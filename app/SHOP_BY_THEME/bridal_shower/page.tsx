import Image from "next/image";
import Footer from "../../components/Footer";
import LargeHeading from "../../components/ui/LargeHeading";
import Navbar from "../../components/ui/Navbar";
import Paragraph from "../../components/ui/Paragraph";
import { Items } from "../../constants";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-black">
      <Navbar />
      <div className="h-auto flex flex-col gap-16 align-middle items-center justify-center bg-[#FFEBEC] py-24">
        <div className="flex flex-col justify-center items-center gap-8 px-4 flex-1">
          <LargeHeading className="drop-shadow-2xl text-[#231F20]">
            Bridal Shower
          </LargeHeading>
          <Paragraph size="sm" className=" text-slate-600 text-center">
            Welcome to our Balloon Styling section, where we turn your
            celebrations into works of art. Our team of expert stylists is
            dedicated to transforming your events into unforgettable experiences
            through the power of balloons.
          </Paragraph>
        </div>
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {Items?.filter((data) => data.Theme === "Bridal Shower").map(
            (data: any, index) => {
              const words = data.Type.split(" ");
              const transformedString = words
                .map((word: string) => word.toLowerCase())
                .join("_");
              return (
                <div
                  key={index}
                  className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                >
                  <Link
                    href={`/PARTY_SUPPLIES/${transformedString}/${data.ID}`}
                    className={`relative overflow-hidden md:w-auto cursor-pointer mb-10`}
                  >
                    <Image
                      width={1000}
                      height={1000}
                      className="object-cover aspect-square"
                      src={`/${transformedString}/${data.Images[0]}`}
                      alt={data.Name as string}
                    />
                    <div className="px-4 py-8 w-72">
                      <p className="text-lg font-bold text-black truncate block capitalize">
                        {data.Name}
                      </p>
                      <div className="flex items-center">
                        <p className="text-sm text-gray-600 cursor-auto ml-2">
                          $199
                        </p>

                        <div className="ml-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-bag-plus"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                            />
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
