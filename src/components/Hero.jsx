import React from "react";
import { Link } from "react-router-dom";

import iconGlobalWhite from "../assets/icon-global-white.svg";
import iconDeviceMessage from "../assets/icon-device-message.svg";
import iconStatusUp from "../assets/icon-status-up.svg";
import iconCloudAdd from "../assets/icon-cloud-add.svg";
import ulistrationHero from "../assets/ulistration-hero.png";

import Button from "./Button";
import GlobalIcon from "./icon/GlobalIcon";
import DeviceMessageIcon from "./icon/DeviceMessageIcon";
import CloudAddIcon from "./icon/CloudAddIcon";
import CloudAddIconMD from "./icon/CloudAddIconMD";
import StatusUpIcon from "./icon/StatusUpIcon";
import StatusUpIconMD from "./icon/StatusUpIconMD";

export default function Hero() {
  return (
    <section className="py-8 md:py-0">
      <div className="flex flex-col gap-y-16 lg:flex-row items-center justify-between">
        <div className="flex flex-col gap-y-10">
          <div className="bg-white-1 dark:bg-dark-blue-2 w-fit flex items-center gap-x-2 px-4 py-2 rounded-full">
            <GlobalIcon />
            <p className="text-blue-3 dark:text-white-2 font-semibold">
              We host more than 120,000 websites
            </p>
          </div>
          <div>
            <h1 className="text-4xl dark:text-white-2 sm:text-5xl md:text-6xl xl:text-7xl mb-3">
              Grow Online <br /> Business Faster.
            </h1>
            <p className="dark:text-gray-1">
              We provide a variety of servers to grow your users
              <br className="hidden sm:block" />
              acquisition much user-friendly and boosting up sales.
            </p>
          </div>
          <div className="flex items-center gap-x-5">
            <Link to={"/"}>
              <Button isPrimary>Try Free Trial</Button>
            </Link>
            <Link to={"/"} className="flex items-center gap-x-2">
              <DeviceMessageIcon />
              <span className="text-blue-2 dark:text-white-2 text-sm md:text-base font-semibold">
                Schedule a Demo
              </span>
            </Link>
          </div>
        </div>
        <div className="px-12 pt-12 relative">
          <img
            src={ulistrationHero}
            alt="ulistration hero"
            width={400}
            height={500}
            className="w-[25rem]"
          />
          <div className="absolute top-0 left-0 flex gap-x-2.5 md:gap-x-5 bg-white-1 dark:bg-dark-blue-2 p-4 sm:p-5 items-center rounded-3xl">
            {/* <img
              src={iconCloudAdd}
              alt="icon cloud-add"
              width={46}
              height={46}
              className="w-7 h-7 md:w-11 md:h-11"
            /> */}
            <CloudAddIconMD />
            <div className="flex flex-col gap-y-1 mr-3.5">
              <span className="text-blue-3 dark:text-white-2 text-base sm:text-lg md:text-xl font-bold">
                Super Reliable
              </span>
              <span className="text-gray-2 dark:text-gray-1 text-xs sm:text-sm md:text-base">
                24/7 Always Active
              </span>
            </div>
          </div>
          <div className="absolute top-24 right-5 sm:right-0 bg-blue-2 p-3.5 sm:p-5 rounded-full">
            <img
              src={iconGlobalWhite}
              alt="icon global"
              width={46}
              height={46}
              className="w-7 h-7 md:w-11 md:h-11"
            />
          </div>
          <div className="absolute bottom-7 right-0 bg-white-1 dark:bg-dark-blue-2 p-4 sm:p-5 rounded-3xl flex flex-col items-center gap-y-4 sm:gap-y-6">
            {/* <img
              src={iconStatusUp}
              alt="icon global"
              width={46}
              height={46}
              className="w-7 h-7 md:w-11 md:h-11"
            /> */}
            <StatusUpIconMD />
            <div className="flex flex-col items-center">
              <span className="text-blue-3 dark:text-white-2 font-bold text-xl sm:text-2xl md:text-3xl mb-0.5">
                +490%
              </span>
              <span className="text-gray-2 dark:text-gray-1 text-xs sm:text-sm md:text-base">
                Engagements
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
