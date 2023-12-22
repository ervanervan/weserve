import React from "react";
import { Link } from "react-router-dom";

export default function CardGetStarted({ icon, iconName, iconHover, title }) {
  return (
    <div className="group relative">
      <div className="w-[8.50rem] md:w-[10.25rem] md:h-44 bg-white-1 py-7 px-4 rounded-3xl transition-all duration-500 group-hover:bg-blue-3">
        <div className="flex flex-col items-center justify-center gap-y-5">
          <img
            src={icon}
            alt={iconName}
            width={46}
            height={46}
            className="opacity-100 transition group-hover:hidden"
          />
          <img
            src={iconHover}
            alt={iconName}
            width={46}
            height={46}
            className="hidden transition group-hover:block"
          />
          <div className="flex flex-col items-center">
            <span className="text-blue-3 font-bold text-sm sm:text-base md:text-lg group-hover:text-white-1">
              {title}
            </span>
            <Link to={"/"} className="w-fit hidden group-hover:block">
              <button className="text-blue-2 text-base font-semibold bg-transparent bg-white-1 rounded-full transition-all duration-300 group-hover:text-white-1">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
