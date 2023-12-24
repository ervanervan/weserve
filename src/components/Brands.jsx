import React from "react";
import { DATA_BRANDS } from "../Data";
import Marquee from "react-fast-marquee";

export default function Brands() {
  return (
    <section className="py-8 my-4">
      <Marquee autoFill={true}>
        {DATA_BRANDS.map((item) => (
          <div key={item.name} className="flex items-center px-6 md:my-9">
            <div>{item.imgURL}</div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
