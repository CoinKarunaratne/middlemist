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
            Straws
          </LargeHeading>
          <Paragraph size="sm" className=" text-slate-600 text-center">
            Make every drink a celebration with our themed straws. Whether you
            are serving up smoothies or cocktails, our colorful and patterned
            straws add a playful touch to your beverages. Sip in style and let
            the good times flow.
          </Paragraph>
        </div>
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {Items?.filter((data) => data.Type === "Straws").map(
            (data: any, index) => {
              return (
                <div
                  key={index}
                  className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                >
                  <Link
                    href={`/PARTY_SUPPLIES/straws/${data.ID}`}
                    className={`relative overflow-hidden md:w-auto cursor-pointer mb-10`}
                  >
                    <Image
                      width={1000}
                      height={1000}
                      className="object-cover aspect-square"
                      src={`/straws/${data.Images[0]}`}
                      alt={data.Name as string}
                    />
                    <div className="px-4 py-8 w-72">
                      <p className="text-lg font-bold text-blac block capitalize">
                        {data.Name}
                      </p>
                      <div className="flex items-center">
                        <p className="text-base text-gray-600 cursor-auto ml-2">
                          ${data.Price}.00
                        </p>
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
