import React from "react";
import { Link } from "react-router-dom";

import iconGlobalSolid from "../assets/icon-global-solid.svg";
import iconDeviceMessageWhite from "../assets/icon-device-message-white.svg";
import Button from "./Button";
import { DATA_GETSTARTED } from "../Data";
import CardGetStarted from "./CardGetStarted";

export default function GetStarted() {
  return (
    <section className="py-8 md:py-12">
      <div className="flex flex-col xl:flex-row gap-y-16 items-center justify-between px-5 py-7 md:p-12 rounded-3xl bg-blue-2">
        <div className="flex flex-col gap-y-10">
          <div className="bg-white-1 w-fit flex items-center gap-x-2 px-4 py-2 rounded-full">
            <img
              src={iconGlobalSolid}
              alt="icon global"
              width={24}
              height={24}
            />
            <p className="text-blue-3 font-semibold">
              We host more than 120,000 websites
            </p>
          </div>
          <div>
            <h2 className="text-white-1 text-[1.75rem] sm:text-3xl md:text-4xl lg:lg:text-[2.50rem] xl:text-5xl mb-3">
              Start Growing Today
            </h2>
            <p className="text-white-1">
              We provide a variety of servers to grow your users
              <br className="hidden sm:block" />
              acquisition much user-friendly and boosting up sales.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <Link to={"/"}>
              <Button isYellow>Explore More</Button>
            </Link>
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

        <div className="w-full lg:w-4/5 xl:w-1/2 flex justify-center xl:justify-end 2xl:ml-72 gap-5 flex-wrap">
          {DATA_GETSTARTED.map((item) => {
            return <CardGetStarted key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}
