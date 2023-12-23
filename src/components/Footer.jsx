import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FOOTER_LINKS } from "../Data";
import SmsIcon from "./icon/SmsIcon";
import Global2Icon from "./icon/Global2Icon";
import CallIcon from "./icon/CallIcon";
import VideoPlayIcon from "./icon/VideoPlayIcon";

export default function Footer() {
  return (
    <footer className="py-8 md:pb-6 -mt-[32rem] md:-mt-[28rem] lg:-mt-[23rem] xl:-mt-[17.50rem] bg-blue-1 dark:bg-dark-blue-2">
      <div className="max-width pt-[32rem] md:pt-[29rem] lg:pt-[24rem] xl:pt-[19rem] pb-6 flex flex-col lg:flex-row gap-y-16 items-start justify-between">
        <div className="flex flex-col gap-y-8">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={logo} alt="logo" width={40} height={40} />
            <h1 className="text-3xl text-white-1">weserve.</h1>
          </Link>
          <p className="text-gray-1">
            We host your empire business today{" "}
            <br className="hidden sm:block" /> using the latest technologies.
          </p>
          <div className="flex gap-x-3.5">
            <Link
              to={"/"}
              className="group bg-white-1 dark:bg-dark-blue-1 p-3 rounded-full hover:bg-white-1-hover transition-all duration-300"
            >
              <SmsIcon />
            </Link>
            <Link
              to={"/"}
              className="group bg-white-1 dark:bg-dark-blue-1 p-3 rounded-full hover:bg-white-1-hover transition-all duration-300"
            >
              <Global2Icon />
            </Link>
            <Link
              to={"/"}
              className="group bg-white-1 dark:bg-dark-blue-1 p-3 rounded-full hover:bg-white-1-hover transition-all duration-300"
            >
              <CallIcon />
            </Link>
            <Link
              to={"/"}
              className="group bg-white-1 dark:bg-dark-blue-1 p-3 rounded-full hover:bg-white-1-hover transition-all duration-300"
            >
              <VideoPlayIcon />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 lg:gap-8 xl:gap-20">
          {FOOTER_LINKS.map((link) => (
            <div key={link.id} className="flex flex-col gap-y-7">
              <h4 className="text-white-1 font-bold text-base md:text-lg">
                {link.title}
              </h4>
              {link.sublinks && (
                <ul className="flex flex-col gap-y-4 ">
                  {link.sublinks.map((product) => (
                    <li key={product.id}>
                      <Link
                        to={product.url}
                        className="text-gray-1 hover:text-gray-2 text-sm md:text-base transition-all duration-300"
                      >
                        {product.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <p className="text-center pt-6 text-gray-1">
        ©2024 Weserve | Copyright Reserved.
      </p>
    </footer>
  );
}
