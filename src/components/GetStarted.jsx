import React from "react";
import { Link } from "react-router-dom";
import { DATA_GETSTARTED } from "../Data";

import Button from "./Button";
import CardGetStarted from "./CardGetStarted";

import iconGlobalSolid from "../assets/icon-global-solid.svg";
import iconDeviceMessageWhite from "../assets/icon-device-message-white.svg";

export default function GetStarted() {
  return (
    <section className="relative py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-y-16 items-center justify-between px-5 py-7 md:p-12 rounded-3xl bg-blue-2">
        <div className="flex flex-col gap-y-10">
          <div className="bg-white-1 w-fit flex items-center gap-x-2 px-4 py-2 rounded-full">
            <img
              src={iconGlobalSolid}
              alt="icon global"
              width={24}
              height={24}
            />
            <p className="text-blue-3 text-xs md:text-sm font-semibold">
              We host more than 120,000 websites
            </p>
          </div>
          <div>
            <h2 className="text-white-1 text-[1.75rem] sm:text-3xl md:text-4xl lg:lg:text-[2.50rem] xl:text-5xl mb-3">
              Start Growing Today
            </h2>
            <p className="text-white-2">
              We provide a variety of servers to grow your users
              <br className="hidden sm:block" />
              acquisition much user-friendly and boosting up sales.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <Link to={"/"} className="flex flex-col">
              <Button isYellow>Explore More</Button>
            </Link>
            <div className="flex flex-col md:flex-row items-center">
              <Link to={"/"} className="flex items-center gap-x-2">
                <img
                  src={iconDeviceMessageWhite}
                  alt="icon device message white"
                  width={24}
                  height={24}
                />
                <span className="text-white-1 text-sm md:text-base font-semibold">
                  Schedule a Demo
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end gap-5 flex-wrap">
          {DATA_GETSTARTED.map((item) => {
            return <CardGetStarted key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}
