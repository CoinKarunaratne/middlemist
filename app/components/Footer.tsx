import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

const Footer: FC = ({}) => {
  return (
    <>
      <section id="footer" className="bg-[#9D9FA2] w-full">
        <div className="flex flex-col gap-[100px] md:flex-row h-full w-full justify-center sm:justify-between py-3 px-10 text-lg text-white">
          <div className="flex flex-col justify-evenly">
            <h1 className="mb-5 font-bold text-xl">Quick Links</h1>

            <div className="flex flex-col gap-1">
              <Link href="/ABOUT" className="text-base">
                About
              </Link>
              <Link href="/SHIPPING" className="text-base">
                Shipping Policy
              </Link>
              <Link href="/TERMS" className="text-base">
                Terms & Conditions
              </Link>
            </div>
            <h1 className="text-slate-500 font-semibold mt-5 text-base text-left hidden md:inline-block">
              Copyright 2023. All Rights Reserved
            </h1>
          </div>

          <div className="align-text-bottom flex flex-col h-auto relative">
            <Image
              src="/Vertical-logo.png"
              alt="Logo"
              width={300}
              height={300}
              className="mb-10"
            />

            <div className="flex flex-col gap-1 mb-5">
              <h1 className="text-base font-medium">
                Contact us on Facebook or Instagram
              </h1>

              <div className="flex gap-4">
                <a href="https://www.facebook.com/middlemistevents?mibextid=LQQJ4d">
                  <Image
                    src="/facebook.png"
                    alt="facebook"
                    width={50}
                    height={50}
                    className="w-8 hover:opacity-70"
                  />
                </a>
                <a href="https://www.instagram.com/middlemistevents?igsh=b21kMHQxYm05dnU0&utm_source=qr">
                  <Image
                    src="/instagram.png"
                    alt="instagram"
                    width={50}
                    height={50}
                    className="w-8 hover:opacity-70"
                  />
                </a>
              </div>

              <h1 className="text-base mt-5 font-medium">Call us now</h1>
              <h1 className="text-base text-slate-500 font-medium">
                0220823096
              </h1>
              <h1 className="text-slate-500 font-semibold mt-5 text-base text-left md:hidden inline-block">
                Copyright 2023. All Rights Reserved
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
