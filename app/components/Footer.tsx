import { FC } from "react";

const Footer: FC = ({}) => {
  return (
    <>
      <section
        id="footer"
        className="h-[600px] sm:h-[400px] bg-slate-600 w-full"
      >
        <div className="flex h-full w-full justify-center sm:justify-between">
          <div
            href="#home"
            className="text-white text-[45px] font-bold align-text-bottom self-end p-8 hidden sm:flex"
          >
            Miidlemist Events
          </div>
          <div className="align-text-bottom self-end flex flex-col gap-4">
            <div className="flex gap-7 p-8 lg:mr-8">
              <a href="">
                <img
                  src="/github.png"
                  alt=""
                  className="w-10 hover:opacity-70"
                />
              </a>
              <a href="">
                <img
                  src="/facebook.png"
                  alt=""
                  className="w-10 hover:opacity-70"
                />
              </a>
              <a href="">
                <img
                  src="/instagram.png"
                  alt=""
                  className="w-10 hover:opacity-70"
                />
              </a>
              <a href="">
                <img
                  src="/linkedin.png"
                  alt=""
                  className="w-10 hover:opacity-70"
                />
              </a>
            </div>

            <div className="text-slate-500 font-semibold text-center mb-5">
              Copyright 2023. All Rights Reserved
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
