import React from "react";
import { Link } from "react-router-dom";

import iconGlobal from "../assets/icon-global-solid.svg";
import iconDeviceMessage from "../assets/icon-device-message.svg";

import Button from "./Button";

export default function Hero() {
  return (
    <section className="py-8">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col gap-y-10">
          <div className="bg-white-1 w-fit flex items-center gap-x-2 px-4 py-2 rounded-full">
            <img src={iconGlobal} alt="icon global" />
            <p className="text-blue-3 font-semibold">
              We host more than 120,000 websites
            </p>
          </div>
          <div>
            <h1 className="text-7xl mb-3">
              Grow Online <br /> Business Faster.
            </h1>
            <p>
              We provide a variety of servers to grow your users <br />{" "}
              acquisition much user-friendly and boosting up sales.
            </p>
          </div>
          <div className="flex items-center gap-x-5">
            <Link to={"/"}>
              <Button isPrimary>Try Free Trial</Button>
            </Link>
            <Link to={"/"} className="flex items-center gap-x-2">
              <img src={iconDeviceMessage} alt="icon device message" />
              <span className="text-blue-2 font-semibold">Schedule a Demo</span>
            </Link>
          </div>
        </div>
        <div>2</div>
      </div>
    </section>
  );
}
