import React from "react";
import { DATA_OURSHOWCASE } from "../Data";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function OurShowcase() {
  return (
    <section className="py-8 md:py-12">
      <div className="flex flex-col gap-y-8">
        <div className="text-center">
          <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:lg:text-[2.50rem] xl:text-5xl mb-3">
            Our Showcase
          </h2>
          <p>
            They built amazing website to help more people around the world
            <br className="hidden sm:block" />
            by using our recommendation services and products
          </p>
        </div>
        <Marquee
          autoFill={true}
          gradient={true}
          gradientColor="#F1F4F5"
          gradientWidth={50}
        >
          <div className="flex items-center justify-center">
            {DATA_OURSHOWCASE.map((item) => (
              <div key={item.id} className="relative group mx-5">
                <img
                  src={item.imgURL}
                  alt={item.imgName}
                  width={320}
                  height={220}
                  className="border-4 border-white-2 group-hover:border-4 group-hover:border-blue-2 rounded-2xl transition-all duration-300"
                />
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden group-hover:block">
                  <Link to={"#"}>
                    <Button isPrimaryMD>View Details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
