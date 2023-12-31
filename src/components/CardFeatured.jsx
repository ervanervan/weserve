import React from "react";
import { Link } from "react-router-dom";
import Shadow from "./icon/Shadow";

export default function CardFeatured({ icon, title, description }) {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  return (
    <div
      className="group relative"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[18.50rem] rounded-2xl bg-white-1 dark:bg-dark-blue-2 group-hover:bg-blue-3 dark:group-hover:bg-blue-2 px-6 py-8 transition-all duration-500">
        <div className="flex flex-col gap-y-8">
          {/* <img
            src={isHovered ? iconHover : icon}
            alt={iconName}
            width={46}
            height={46}
          /> */}

          {/* ICON HOVER
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
          /> */}

          <div>{icon}</div>

          <div>
            <h3 className="text-blue-3 dark:text-white-2 font-bold text-xl group-hover:text-white-1 mb-1">
              {title}
            </h3>
            <p className="w-4/5 md:w-full group-hover:dark:text-white-2 group-hover:text-gray-1">
              {description}
            </p>
          </div>
          <Link to={"/"} className="w-fit">
            <button className="text-blue-2 dark:text-white-2 text-base font-semibold bg-transparent group-hover:bg-transparent rounded-full transition-all duration-300 group-hover:text-white-1">
              Learn More
            </button>
          </Link>
          {/* <img
            src={shadow}
            alt="shadow"
            draggable={false}
            className="hidden absolute top-0 right-2 group-hover:block"
          /> */}
          <Shadow />
        </div>
      </div>
    </div>
  );
}
