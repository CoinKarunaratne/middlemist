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
            Shop By Theme
          </LargeHeading>
          <Paragraph size="sm" className=" text-slate-600 text-center">
            Dive into a world of enchantment with our Unicorn Themed Party
            Supplies. From plates to cake toppers, every detail is sprinkled
            with magic. Create a whimsical celebration that delights and
            captivates guests of all ages. Let the enchantment unfold!
          </Paragraph>
        </div>
        <div>
          {MenuItems[4]?.dropdownItems?.map((data: any, index) => {
            return (
              <>
                <h1 className="drop-shadow-2xl text-[#231F20] mt-10 mb-5 text-center font-extrabold leading-tight tracking-tighter text-xl md:text-2xl lg:text-3xl">
                  {data.name} Themes
                </h1>
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full p-8 gap-4 container justify-items-center"
                >
                  {data?.dropdownItems?.map((innerData: any) => {
                    const words = innerData.split(" ");
                    const transformedString = words
                      .map((word: string) => word.toLowerCase())
                      .join("_");
                    let description: string = "";
                    return (
                      <Link
                        href={`/SHOP_BY_THEME/${transformedString as URL}`}
                        key={index}
                        className={`relative overflow-hidden md:w-auto cursor-pointer mb-10 transform duration-500 hover:-translate-y-2 bg-white pb-8 rounded-xl`}
                      >
                        <Image
                          width={1000}
                          height={1000}
                          className="object-cover aspect-square"
                          src={`/PARTY_SUPPLIES/Cups.jpg`}
                          alt={innerData as string}
                        />
                        <div className="flex flex-col gap-10 mt-10">
                          <div className="self-center">
                            <h1 className=" text-4xl text-center lg:text-left font-extrabold leading-tight tracking-tighter text-[#231F20]">
                              {innerData as string}
                            </h1>
                            <h1 className="text-center text-[#231F20]">
                              100 products
                            </h1>
                          </div>

                          <button className="shop-now-button w-[80%] self-center">
                            SHOP NOW
                          </button>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
}
