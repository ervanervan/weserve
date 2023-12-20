import React from "react";
import { Link } from "react-router-dom";

import iconDeviceMessage from "../assets/icon-device-message.svg";
import { DATA_OURECOSYSTEM } from "../Data";
import Button from "./Button";

export default function OurEcosystem() {
  return (
    <section className="py-8 md:py-12">
      <div className="flex flex-col md:flex-row items-center justify-beetween">
        <div className=""></div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-y-10">
            <div>
              <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl mb-3">
                We Have VeryStrong Ecosystem
              </h2>
              <p>
                We provide a variety of servers to grow your users
                <br className="hidden sm:block" />
                acquisition much user-friendly and boosting up sales.
              </p>
            </div>
            {DATA_OURECOSYSTEM.map((item) => (
              <div
                key={item.id}
                className="flex gap-x-4 items-center bg-white-1 max-w-[31.25rem] p-5 rounded-2xl"
              >
                <img
                  src={item.icon}
                  alt={item.iconName}
                  width={46}
                  height={46}
                  className="w-7 h-7 md:w-11 md:h-11"
                />
                <div className="flex flex-col gap-y-1">
                  <span className="text-blue-3 text-base sm:text-lg md:text-xl font-bold">
                    {item.title}
                  </span>
                  <span className="text-gray-2 text-xs sm:text-sm md:text-base">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-x-5">
              <Link to={"/"}>
                <Button isPrimary>Try Free Trial</Button>
              </Link>
              <Link to={"/"} className="flex items-center gap-x-2">
                <img src={iconDeviceMessage} alt="icon device message" />
                <span className="text-blue-2 text-sm md:text-base font-semibold">
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
