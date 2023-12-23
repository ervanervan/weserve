import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import { DATA_OURECOSYSTEM } from "../Data";

import iconStar from "../assets/icon-star.svg";
import iconCrownWhite from "../assets/icon-crown-white.svg";
import iconStatusUp from "../assets/icon-status-up.svg";
import iconDeviceMessage from "../assets/icon-device-message.svg";
import iconMessageProgramming from "../assets/icon-message-programming.svg";
import ulistrationEcosystem from "../assets/ulistration-ecosystem.png";
import DeviceMessageIcon from "./icon/DeviceMessageIcon";

export default function OurEcosystem() {
  return (
    <section className="py-8 md:py-12">
      <div className="flex flex-col gap-y-16 lg:flex-row items-center justify-between">
        <div className="relative px-12 pt-12">
          <img
            src={ulistrationEcosystem}
            alt="ulistration-ecosystem"
            width={400}
            height={500}
          />
          <div className="absolute top-24 md:top-32 left-0 bg-white-1 p-5 rounded-3xl">
            <div className="flex flex-col items-center gap-y-3 sm:gap-y-5">
              <img
                src={iconStatusUp}
                alt="icon Status Up"
                width={46}
                height={46}
                className="w-7 h-7 md:w-11 md:h-11"
              />
              <div className="flex items-center flex-col mb-2">
                <span className="text-blue-3 text-sm sm:text-base lg:text-lg font-bold mb-0.5">
                  5/5 Growth
                </span>
                <div className="flex gap-x-0.5 items-center">
                  <img
                    src={iconStar}
                    alt="icon Star"
                    width={18}
                    height={18}
                    className="w-3.5 md:w-5"
                  />
                  <img
                    src={iconStar}
                    alt="icon Star"
                    width={18}
                    height={18}
                    className="w-3.5 md:w-5"
                  />
                  <img
                    src={iconStar}
                    alt="icon Star"
                    width={18}
                    height={18}
                    className="w-3.5 md:w-5"
                  />
                  <img
                    src={iconStar}
                    alt="icon Star"
                    width={18}
                    height={18}
                    className="w-3.5 md:w-5"
                  />
                  <img
                    src={iconStar}
                    alt="icon Star"
                    width={18}
                    height={18}
                    className="w-3.5 md:w-5"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-11 right-7 bg-blue-2 p-3.5 sm:p-5 rounded-full">
            <img
              src={iconCrownWhite}
              alt="icon Crown White"
              width={46}
              height={46}
              className="w-7 h-7 md:w-11 md:h-11"
            />
          </div>
          <div className="absolute bottom-10 right-0 flex gap-x-2.5 md:gap-x-5 bg-white-1 p-4 sm:p-5 items-center rounded-3xl">
            <img
              src={iconMessageProgramming}
              alt="icon Message Programming"
              width={46}
              height={46}
              className="w-7 h-7 md:w-11 md:h-11"
            />
            <div className="flex flex-col gap-y-1 mr-3.5">
              <span className="text-blue-3 text-base sm:text-lg md:text-xl font-bold">
                AI Automation
              </span>
              <span className="text-gray-2 text-xs sm:text-sm md:text-base">
                Working Faster
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col mx-auto lg:items-start gap-y-10">
            <div className="text-start sm:text-center lg:text-start">
              <h2 className="text-[1.75rem] dark:text-white-2 sm:text-3xl md:text-4xl lg:text-[2.50rem] xl:text-5xl mb-3">
                We Have Very <br /> Strong Ecosystem
              </h2>
              <p className="dark:text-gray-1">
                We provide a variety of servers to grow your users
                <br className="hidden sm:block" />
                acquisition much user-friendly and boosting up sales.
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-5">
              {DATA_OURECOSYSTEM.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-x-4 items-center bg-white-1 dark:bg-dark-blue-2 w-full sm:w-[29rem] xl:w-[36.5rem] p-5 rounded-2xl"
                >
                  <div>{item.icon}</div>
                  <div className="flex flex-col gap-y-1">
                    <span className="text-blue-3 dark:text-white-2 text-base sm:text-lg md:text-xl font-bold">
                      {item.title}
                    </span>
                    <span className="text-gray-2 dark:text-gray-1 text-xs sm:text-sm md:text-base">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center sm:justify-center gap-x-5">
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
        </div>
      </div>
    </section>
  );
}
