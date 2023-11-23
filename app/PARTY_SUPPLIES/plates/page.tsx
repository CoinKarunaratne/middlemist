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
            Plates
          </LargeHeading>
          <Paragraph size="sm" className=" text-slate-600 text-center">
            Dazzle your guests with our collection of foil balloons. These
            balloons are the epitome of shimmering elegance, adding a touch of
            glamour to your celebrations. With various shapes, sizes, and
            captivating designs, our foil balloons are perfect for making your
            special moments truly shine.
          </Paragraph>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full p-8 gap-4 container justify-items-center">
          {Items?.filter((data) => data.Type === "Plates").map(
            (data: any, index) => {
              const words = data.Name.split(" ");
              const transformedString = words
                .map((word: string) => word.toLowerCase())
                .join("_");

              return (
                <Link
                  href={`/PARTY_SUPPLIES/${transformedString as URL}`}
                  key={index}
                  className={`relative overflow-hidden md:w-auto cursor-pointer mb-10`}
                >
                  <Image
                    width={1000}
                    height={1000}
                    className="object-cover aspect-square"
                    src={`/plates/${data.Images[0]}`}
                    alt={data.Name as string}
                  />
                  <div className="flex flex-col gap-10 mt-10">
                    <div className="self-center">
                      <h1 className="text-xl text-center lg:text-left font-extrabold leading-tight tracking-tighter text-[#231F20]">
                        {data.Name as string}
                      </h1>
                      <h1 className="text-center text-[#231F20]">$9.99</h1>
                    </div>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
