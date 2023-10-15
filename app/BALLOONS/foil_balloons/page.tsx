import Image from "next/image";
import Footer from "../../components/Footer";
import LargeHeading from "../../components/ui/LargeHeading";
import Navbar from "../../components/ui/Navbar";
import Paragraph from "../../components/ui/Paragraph";
import { Items } from "../../constants";

export default function Home() {
  const filteredArray = Items.filter((data) => data.Type === "Foil Balloon");
  return (
    <main className="flex min-h-screen flex-col text-black">
      <Navbar />
      <div className="h-auto flex flex-col gap-16 align-middle items-center justify-center bg-[#FFEBEC] py-24">
        <div className="flex flex-col justify-center items-center gap-8 px-4 flex-1">
          <LargeHeading className="drop-shadow-2xl text-[#231F20]">
            Foil Balloons
          </LargeHeading>
          <Paragraph size="sm" className=" text-slate-600 text-center">
            Each box is a treasure trove of carefully curated party items,
            ensuring your events theme is flawlessly executed. From whimsical to
            elegant, our Party Boxes make party planning a breeze, delivering
            all you need in one enchanting package
          </Paragraph>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full p-8 gap-4 container justify-items-center">
          {filteredArray?.map((data: any, index: number) => {
            return (
              <div
                key={index}
                className={`relative overflow-hidden md:w-auto cursor-pointer`}
              >
                <Image
                  width={1000}
                  height={1000}
                  className="object-cover aspect-square"
                  src={`/foilBalloons/${data.Images[0]}`}
                  alt={data as string}
                />
                <div className="flex flex-col gap-10 mt-10">
                  <div className="self-center">
                    <h1 className=" text-4xl text-center lg:text-left font-extrabold leading-tight tracking-tighter text-[#231F20]">
                      {data.Name as string}
                    </h1>
                  </div>

                  <p className="text-slate-600 text-sm text-center">
                    {data.Description}
                  </p>
                  <p className="text-slate-600 text-sm text-center">
                    {data.Theme}
                  </p>
                  <p className="text-slate-600 text-sm text-center">
                    {data.Dimension}
                  </p>

                  <button className="shop-now-button w-[80%] self-center">
                    BUY NOW
                  </button>
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
