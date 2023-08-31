"use client";

import Image from "next/image";
import { MenuItems } from "../../constants";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="p-5 flex flex-row w-full">
        <div className="flex-grow flex justify-center items-center">
          <Image src="/Circular Logo.svg" alt="Logo" width={100} height={100} />
        </div>
        <div className="relative">
          <div className="flex flex-row gap-4">
            <Image
              src="/search.svg"
              alt="search"
              width={20}
              height={30}
              className="object-contain cursor-pointer"
            />
            <Image
              src="/menu.svg"
              alt="menu"
              width={20}
              height={30}
              className="object-contain cursor-pointer lg:hidden"
              onClick={() => {
                setMenu(!menu);
              }}
            />
          </div>
          {menu && (
            <motion.div
              className="navbar"
              initial={{ right: "-100%" }}
              animate={{ right: 0 }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <ul className="flex flex-col gap-8">
                {MenuItems.map((content, position) => (
                  <motion.div
                    className="flex justify-between"
                    key={position}
                    initial={{ opacity: 0, translateX: 50 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.3, delay: position * 0.2 }}
                  >
                    <Link
                      href={`/${content.name}`}
                      className="font-semibold text-sm"
                    >
                      {content.name}
                    </Link>
                    <ArrowRight size={20} color="gray" />
                  </motion.div>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
      <nav className="lg:flex flex-row gap-8 my-5 justify-center hidden">
        {MenuItems.map((content, position) => (
          <div className="dropdown" key={position}>
            <Link href={`/${content.name}`} className="link font-semibold">
              {content.name}
            </Link>
            {content.dropdownItems && (
              <div className="dropdown-menu flex flex-col gap-4 w-56 items-center">
                {content.dropdownItems.map((item, index) => {
                  if (typeof item === "string") {
                    return (
                      <div
                        key={index}
                        className="cursor-pointer w-full text-center hover:bg-slate-400 rounded hover:text-white transition duration-300 ease-in-out"
                      >
                        {item}
                      </div>
                    );
                  } else {
                    return (
                      <div key={index} className="flex flex-col w-full gap-4">
                        <h1 className="font-bold text-left">{item.name}</h1>
                        <ul className="flex flex-col gap-2">
                          {item.dropdownItems.map((item, index) => (
                            <li
                              key={index}
                              className="text-sm ml-2 cursor-pointer hover:opacity-50"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                })}
              </div>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}

export default Navbar;