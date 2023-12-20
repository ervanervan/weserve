import React from "react";
import { Link } from "react-router-dom";

export default function CardFeatured({
  icon,
  iconHover,
  iconName,
  title,
  description,
}) {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  return (
    <div
      className="group"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[18.50rem] rounded-2xl bg-white-1 group-hover:bg-blue-3 px-6 py-8 transition-all duration-500">
        <div className="flex flex-col gap-y-8">
          {/* <img
            src={isHovered ? iconHover : icon}
            alt={iconName}
            width={46}
            height={46}
          /> */}
          <img
            src={icon}
            alt={iconName}
            width={46}
            height={46}
            className="hidden transition duration-300 ease-in-out group-hover:block"
          />
          <img
            src={iconHover}
            alt={iconName}
            width={46}
            height={46}
            className="opacity-100 transition duration-300 ease-in-out group-hover:hidden"
          />
          <div>
            <h3 className="text-blue-3 font-bold text-xl group-hover:text-white-1 mb-1">
              {title}
            </h3>
            <p className="w-4/5 md:w-full group-hover:text-gray-1">
              {description}
            </p>
          </div>
          <Link to={"/"}>
            <button className="text-blue-2 bg-transparent text-base font-semibold bg-white-1 rounded-full transition-all duration-300 group-hover:text-white-1">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
