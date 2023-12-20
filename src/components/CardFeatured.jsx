import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function CardFeatured({ icon, iconName, title, description }) {
  return (
    <div className="max-w-[18.50rem] rounded-2xl bg-white-1 px-6 py-8">
      <div className="flex flex-col gap-y-8">
        <img src={icon} alt={iconName} width={46} height={46} />
        <div>
          <h3 className="text-blue-3 font-bold text-xl mb-1">{title}</h3>
          <p className="w-4/5 md:w-full">{description}</p>
        </div>
        <Link to={"/"}>
          <Button isWhite>Learn More</Button>
        </Link>
      </div>
    </div>
  );
}
