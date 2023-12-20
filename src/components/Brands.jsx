import React from "react";
import { DATA_BRANDS } from "../Data";
import Marquee from "react-fast-marquee";

export default function Brands() {
  return (
    <section className="py-8 my-4">
      <Marquee
        autoFill={true}
        gradient={true}
        gradientColor="#F1F4F5"
        gradientWidth={100}
      >
        {DATA_BRANDS.map((item) => (
          <div key={item.name} className="flex items-center px-6 md:my-9">
            <img src={item.imgURL} alt={item.name} width={item.width} />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
