"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/ui/Navbar";
import { FC, useEffect, useState } from "react";
import { Items } from "../../../constants";
import Image from "next/image";

interface pageProps {
  params: { id: string };
}

const Page: FC<pageProps> = ({ params }) => {
  const [item, setItem] = useState<any>({});

  useEffect(() => {
    const item = Items.find((data) => data.ID === params.id);
    setItem(item);
  }, []);

  return (
    <main className="flex min-h-screen flex-col text-black">
      <Navbar />
      <div className="bg-[#FFEBEC] py-8 min-h-[60vh] flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <Image
                  width={1000}
                  height={1000}
                  className="object-cover aspect-square"
                  src={`/straws/${item?.Images?.[0]}`}
                  alt={item.Name as string}
                />
              </div>
            </div>
            <div className="md:flex-1 px-4 flex flex-col justify-evenly gap-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {item?.Name}
              </h2>
              <div>
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700">Dimension:</span>
                    <span className="text-gray-600"> {item.Dimension}</span>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700">Price:</span>
                    <span className="text-gray-600"> ${item.Price}.00</span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700">
                      Availability:
                    </span>
                    <span className="text-gray-600"> In Stock</span>
                  </div>
                </div>

                <div>
                  <span className="font-bold text-gray-700">
                    Product Description:
                  </span>
                  <p className="text-gray-600 text-sm mt-2">
                    {item?.Description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:px-4">
                <div>
                  <h2 className="font-bold text-gray-700">Contact us now :</h2>
                  <h2 className="text-gray-700">+64220823096</h2>
                </div>
                <div className="flex gap-10">
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mb-2 inline-block bg-[#0084ff] rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mb-2 inline-block bg-[#128c7e] rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mb-2 inline-block bg-slate-500 rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
