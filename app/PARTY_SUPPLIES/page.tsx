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
            Party Supplies
          </LargeHeading>
          <Paragraph size="sm" className=" text-slate-600 text-center">
            Explore our curated selection of party essentials designed to make
            your events unforgettable. From vibrant decorations to themed
            accessories, discover everything you need to turn your celebration
            into a festive masterpiece. Let the party planning begin with
            Middlemist Events!
          </Paragraph>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full p-8 gap-4 container justify-items-center">
          {MenuItems[2]?.dropdownItems?.map((data: any, index) => {
            const words = data.split(" ");
            const transformedString = words
              .map((word: string) => word.toLowerCase())
              .join("_");
            let description: string = "";
            let subHeading: string = "";
            if (data === "Plates") {
              subHeading = "Add Style to Your Feast";
              description =
                "Dine in style with our collection of themed plates. From whimsical patterns to elegant designs, our plates are the perfect canvas for your party feast. Explore a variety of sizes and themes to elevate your table setting and make every bite a delight.";
            } else if (data === "Cups") {
              subHeading = "Sip in Celebration";
              description =
                "Quench your guests' thirst with our themed cups. Whether it's a refreshing beverage or a signature cocktail, our cups add a touch of flair to every sip. Choose from a range of vibrant colors and designs to suit your party theme and keep the celebration flowing.";
            } else if (data === "Napkins") {
              subHeading = "Wipe Away Worries, Party On";
              description =
                "Stay mess-free and party-ready with our themed napkins. Practical and stylish, our napkins come in a variety of patterns to complement your party theme. Elevate your table decor and ensure a clean and classy celebration for you and your guests.";
            } else if (data === "Straws") {
              subHeading = "Sip with Style";
              description =
                "Make every drink a celebration with our themed straws. Whether you're serving up smoothies or cocktails, our colorful and patterned straws add a playful touch to your beverages. Sip in style and let the good times flow.";
            } else if (data === "Cake Topper") {
              subHeading = "Crown Your Confections";
              description =
                "Top off your party with our delightful cake toppers. Choose from an array of themes to match your celebration and add the perfect finishing touch to your cake. Make your desserts the centerpiece of the party with our whimsical and eye-catching cake toppers.";
            }

            return (
              <Link
                href={`/PARTY_SUPPLIES/${transformedString as URL}`}
                key={index}
                className={`relative overflow-hidden md:w-auto cursor-pointer mb-10 transform duration-500 hover:-translate-y-2 bg-white pb-8 rounded-xl`}
              >
                <Image
                  width={1000}
                  height={1000}
                  className="object-cover aspect-square"
                  src={`/PARTY_SUPPLIES/${data}.jpg`}
                  alt={data as string}
                />
                <div className="flex flex-col gap-10 mt-10">
                  <div className="self-center">
                    <h1 className="text-4xl text-center font-extrabold leading-tight tracking-tighter text-[#231F20]">
                      {data as string}
                    </h1>
                    <h1 className="text-center text-[#231F20] mt-3">
                      {subHeading as string}
                    </h1>
                  </div>

                  <p className="text-slate-600 text-sm text-center h-36 px-5">
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
