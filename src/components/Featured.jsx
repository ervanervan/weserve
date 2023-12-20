import React from "react";
import { DATA_FEATURED } from "../Data";
import CardFeatured from "./CardFeatured";

export default function Featured() {
  return (
    <section className="py-8 md:py-0 md:mb-12">
      <div className="flex flex-col gap-y-8">
        <h2 className="text-center text-[1.75rem] sm:text-3xl md:text-4xl lg:lg:text-[2.50rem] xl:text-5xl">
          Your Best Choice
        </h2>
        <div className="flex flex-col md:flex-row gap-8 flex-wrap items-center justify-center">
          {DATA_FEATURED.map((featured) => {
            return <CardFeatured key={featured.id} {...featured} />;
          })}
        </div>
      </div>
    </section>
  );
}
