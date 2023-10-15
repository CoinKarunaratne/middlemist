import Image from "next/image";
import { FC } from "react";

const Footer: FC = ({}) => {
  return (
    <>
      <section id="footer" className="bg-[#9D9FA2] w-full">
        <div className="flex flex-col gap-[100px] md:flex-row h-full w-full justify-center sm:justify-between py-10 px-10 text-lg text-white">
          <div className="flex flex-col justify-center">
            <h1 className="mb-5 font-bold text-xl">Quick Links</h1>

            <div className="flex flex-col gap-1">
              <a className=" cursor-pointer text-base">About</a>
              <a className=" cursor-pointer text-base">Contact Us</a>
              <a className=" cursor-pointer text-base">Shipping Policy</a>
              <a className=" cursor-pointer text-base">Terms & Conditions</a>
            </div>
          </div>

          <div className="align-text-bottom flex flex-col gap-4 h-auto relative">
            <Image
              src="/Vertical-logo.png"
              alt="Logo"
              width={300}
              height={300}
              className="mb-10"
            />

            <div className="flex gap-7 mb-5">
              <a href="">
                <img
                  src="/github.png"
                  alt=""
                  className="w-8 hover:opacity-70"
                />
              </a>
              <a href="">
                <img
                  src="/facebook.png"
                  alt=""
                  className="w-8 hover:opacity-70"
                />
              </a>
              <a href="">
                <img
                  src="/instagram.png"
                  alt=""
                  className="w-8 hover:opacity-70"
                />
              </a>
              <a href="">
                <img
                  src="/linkedin.png"
                  alt=""
                  className="w-8 hover:opacity-70"
                />
              </a>
            </div>

            <h1 className="text-slate-500 font-semibold mt-5 text-base text-left">
              Copyright 2023. All Rights Reserved
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
