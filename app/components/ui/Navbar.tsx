"use client";

import Image from "next/image";
import {
  MenuItems,
  MainMenuItems,
  BalloonsItems,
  PartyItems,
  ThemeItems,
} from "../../constants";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [items, setItems] = useState([{ name: "", link: "" }]);

  useEffect(() => {
    setItems(MainMenuItems);
  }, []);

  return (
    <>
      <div className="p-5 flex flex-col w-full">
        <div className="flex flex-row gap-4 justify-end">
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
        <div className="flex-grow flex justify-center items-center">
          <Link href="/">
            <Image
              src="/Circular Logo.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="relative">
          {menu && (
            <motion.div
              className="navbar"
              initial={{ right: "-100%" }}
              animate={{ right: 0 }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <ul className="flex flex-col gap-8">
                {items !== MainMenuItems && (
                  <motion.div
                    className="flex justify-between cursor-pointer"
                    initial={{ opacity: 0, translateX: 50 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    onClick={() => {
                      setItems(MainMenuItems);
                    }}
                  >
                    Back
                    <ArrowLeft
                      size={20}
                      color="gray"
                      className="cursor-pointer"
                    />
                  </motion.div>
                )}
                {items.map((content, position) => (
                  <motion.div
                    className="flex justify-between"
                    key={content.name}
                    initial={{ opacity: 0, translateX: 50 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.3, delay: position * 0.2 }}
                  >
                    <Link
                      href={`${content.link}`}
                      className="font-semibold text-sm"
                    >
                      {content.name}
                    </Link>
                    {(content.name === "BALLOONS" ||
                      content.name === "PARTY SUPPLIES" ||
                      content.name === "SHOP BY THEME") && (
                      <ArrowRight
                        size={20}
                        color="gray"
                        className="cursor-pointer"
                        onClick={() => {
                          if (content.name === "BALLOONS") {
                            setItems(BalloonsItems);
                          } else if (content.name === "PARTY SUPPLIES") {
                            setItems(PartyItems);
                          } else if (content.name === "SHOP BY THEME") {
                            setItems(ThemeItems);
                          }
                        }}
                      />
                    )}
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
            {content.name === "PARTY BOXES" ? (
              <Link href={"/#party-boxes"} className="link font-semibold">
                {content.name}
              </Link>
            ) : content.name === "PARTY SUPPLIES" ? (
              <Link href={`/PARTY_SUPPLIES`} className="link font-semibold">
                {content.name}
              </Link>
            ) : content.name === "SHOP BY THEME" ? (
              <div className="link font-semibold">{content.name}</div>
            ) : (
              <Link href={`/${content.name}`} className="link font-semibold">
                {content.name}
              </Link>
            )}

            {content.dropdownItems && (
              <div className="dropdown-menu z-10 flex flex-col gap-4 w-56 items-center text-left">
                {content.dropdownItems
                  .slice() // Create a shallow copy of the dropdownItems array
                  .sort((a, b) => {
                    if (typeof a === "string" && typeof b === "string") {
                      return a.localeCompare(b); // Sort strings alphabetically
                    }
                    if (typeof a === "object" && typeof b === "object") {
                      return a.name.localeCompare(b.name); // Sort objects by the 'name' property
                    }
                    return 0; // Default case (e.g., if the elements are not strings or objects)
                  })
                  .map((item, index) => {
                    if (typeof item === "string") {
                      return (
                        <div
                          key={index}
                          className="cursor-pointer w-full text-left p-1 hover:bg-slate-400 rounded hover:text-white transition duration-300 ease-in-out"
                        >
                          {item === "DIY Balloons" ? (
                            <Link href={"/BALLOONS/diy_balloons"}>{item}</Link>
                          ) : item === "Foil Balloons" ? (
                            <Link href={"/BALLOONS/foil_balloons"}>{item}</Link>
                          ) : item === "Balloon Styling" ? (
                            <Link href={"/BALLOONS/balloon_styling"}>
                              {item}
                            </Link>
                          ) : item === "Plates" ? (
                            <Link href={"/PARTY_SUPPLIES/plates"}>{item}</Link>
                          ) : item === "Cups" ? (
                            <Link href={"/PARTY_SUPPLIES/cups"}>{item}</Link>
                          ) : item === "Napkins" ? (
                            <Link href={"/PARTY_SUPPLIES/napkins"}>{item}</Link>
                          ) : item === "Straws" ? (
                            <Link href={"/PARTY_SUPPLIES/straws"}>{item}</Link>
                          ) : item === "Cake Topper" ? (
                            <Link href={"/PARTY_SUPPLIES/cake_topper"}>
                              {item}
                            </Link>
                          ) : (
                            <Link href={"/BALLOONS/balloon_styling"}>
                              {item}
                            </Link>
                          )}
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={index}
                          className="flex flex-col w-full gap-4 text-left"
                        >
                          <h1 className="font-bold text-left">{item.name}</h1>
                          <ul className="flex flex-col gap-2">
                            {item.dropdownItems
                              .slice() // Create a shallow copy of the dropdownItems array
                              .sort((a, b) => {
                                if (
                                  typeof a === "string" &&
                                  typeof b === "string"
                                ) {
                                  return a.localeCompare(b); // Sort strings alphabetically
                                }
                                return 0; // Default case (e.g., if the elements are not strings)
                              })
                              .map((subItem, subIndex) => (
                                <li
                                  key={subIndex}
                                  className="text-sm ml-2 cursor-pointer hover:opacity-50"
                                >
                                  {subItem === "Bee" ? (
                                    <Link href={"/SHOP_BY_THEME/bee"}>
                                      {subItem}
                                    </Link>
                                  ) : subItem === "Building Blocks" ? (
                                    <Link
                                      href={"/SHOP_BY_THEME/building_blocks"}
                                    >
                                      {subItem}
                                    </Link>
                                  ) : subItem === "Butterfly" ? (
                                    <Link href={"/SHOP_BY_THEME/butterfly"}>
                                      {subItem}
                                    </Link>
                                  ) : subItem === "Cars" ? (
                                    <Link href={"/SHOP_BY_THEME/cars"}>
                                      {subItem}
                                    </Link>
                                  ) : subItem === "Circus" ? (
                                    <Link href={"/SHOP_BY_THEME/circus"}>
                                      {subItem}
                                    </Link>
                                  ) : subItem === "Dino" ? (
                                    <Link href={"/SHOP_BY_THEME/dino"}>
                                      {subItem}
                                    </Link>
                                  ) : subItem === "Ice cream" ? (
                                    <Link href={"/SHOP_BY_THEME/ice_cream"}>
                                      {subItem}
                                    </Link>
                                  ) : subItem === "Jungle" ? (
                                    <Link href={"/SHOP_BY_THEME/jungle"}>
                                      {subItem}
                                    </Link>
                                  ) : subItem === "Mermaid" ? (
                                    <Link href={"/SHOP_BY_THEME/mermaid"}>
                                      {subItem}
                                    </Link>
                                  ) : subItem === "Princess" ? (
                                    <Link href={"/SHOP_BY_THEME/princess"}>
                                      {subItem}
                                    </Link>
                                  ) : subItem === "Space" ? (
                                    <Link href={"/SHOP_BY_THEME/space"}>
                                      {subItem}
                                    </Link>
                                  ) : subItem === "Unicorn" ? (
                                    <Link href={"/SHOP_BY_THEME/unicorn"}>
                                      {subItem}
                                    </Link>
                                  ) : subItem === "Baby Shower" ? (
                                    <Link href={"/SHOP_BY_THEME/baby_shower"}>
                                      {subItem}
                                    </Link>
                                  ) : subItem === "Bridal Shower" ? (
                                    <Link href={"/SHOP_BY_THEME/bridal_shower"}>
                                      {subItem}
                                    </Link>
                                  ) : subItem === "Gender Reveal" ? (
                                    <Link href={"/SHOP_BY_THEME/gender_reveal"}>
                                      {subItem}
                                    </Link>
                                  ) : (
                                    <Link href={"/BALLOONS/balloon_styling"}>
                                      {subItem}
                                    </Link>
                                  )}
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
