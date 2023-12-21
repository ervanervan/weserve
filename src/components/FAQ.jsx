import React, { useState } from "react";
import { DATA_LEFT_FAQ, DATA_RIGHT_FAQ } from "../Data";

import iconArrowDown from "../assets/icon-arrow-down.svg";
import iconArrowUp from "../assets/icon-arrow-up.svg";
import iconDeviceMessageWhite from "../assets/icon-device-message-white.svg";
import { Link } from "react-router-dom";

export default function FAQ() {
  const [openIdLeft, setOpenIdLeft] = useState(null);
  const [openIdRight, setOpenIdRight] = useState(null);

  const toggleAccordionLeft = (id) => {
    setOpenIdLeft((prevId) => (prevId === id ? null : id));
  };

  const toggleAccordionRight = (id) => {
    setOpenIdRight((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="py-8 md:py-12">
      <div className="flex flex-col gap-y-8">
        <h2 className="text-center text-[1.75rem] sm:text-3xl md:text-4xl lg:lg:text-[2.50rem] xl:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-1/2 flex flex-col gap-5">
            {DATA_LEFT_FAQ.map((item) => (
              <div key={item.id} className="bg-white-1 rounded-2xl">
                <div
                  className="flex justify-between items-center p-5 cursor-pointer"
                  onClick={() => toggleAccordionLeft(item.id)}
                >
                  <h2 className="text-lg font-semibold">{item.question}</h2>
                  {openIdLeft === item.id ? (
                    <div className="bg-blue-3 p-1.5 rounded-full">
                      <img
                        src={iconArrowUp}
                        alt="icon Arrow Up"
                        width={18}
                        height={18}
                      />
                    </div>
                  ) : (
                    <div className="bg-white-1 p-1.5 rounded-full">
                      <img
                        src={iconArrowDown}
                        alt="icon Arrow Down"
                        width={18}
                        height={18}
                      />
                    </div>
                  )}
                </div>
                {openIdLeft === item.id && (
                  <div className="flex flex-col gap-y-5 px-5 pb-5">
                    <p className="text-gray-700">{item.answer}</p>
                    <Link to={"/"} className="w-fit">
                      <button className="text-blue-2 text-base font-semibold bg-transparent bg-white-1 rounded-full transition-all duration-300 group-hover:text-white-1">
                        Learn More
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="w-1/2 flex flex-col gap-5">
            {DATA_RIGHT_FAQ.map((item) => (
              <div key={item.id} className="bg-white-1 rounded-2xl">
                <div
                  className="flex justify-between items-center p-5 cursor-pointer"
                  onClick={() => toggleAccordionRight(item.id)}
                >
                  <h2 className="text-lg font-semibold">{item.question}</h2>
                  {openIdRight === item.id ? (
                    <div className="bg-blue-3 p-1.5 rounded-full">
                      <img
                        src={iconArrowUp}
                        alt="icon Arrow Up"
                        width={18}
                        height={18}
                      />
                    </div>
                  ) : (
                    <div className="bg-white-1 p-1.5 rounded-full">
                      <img
                        src={iconArrowDown}
                        alt="icon Arrow Down"
                        width={18}
                        height={18}
                      />
                    </div>
                  )}
                </div>
                {openIdRight === item.id && (
                  <div className="flex flex-col gap-y-5 px-5 pb-5">
                    <p className="text-gray-700">{item.answer}</p>
                    <Link to={"/"} className="w-fit">
                      <button className="text-blue-2 text-base font-semibold bg-transparent bg-white-1 rounded-full transition-all duration-300 group-hover:text-white-1">
                        Learn More
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
            <div className="bg-blue-3 rounded-2xl">
              <Link
                to={"mailto:weserve@gmail.com"}
                className="flex justify-between items-center p-5 cursor-pointer"
              >
                <div className="flex items-center gap-x-2">
                  <img
                    src={iconDeviceMessageWhite}
                    width={24}
                    height={24}
                    alt="icon Device Message White"
                  />
                  <span className="text-white-1">
                    Send e-mail to us for other questions
                  </span>
                </div>
                <div className="p-1.5 bg-white-1 rounded-full">
                  <img
                    src={iconArrowDown}
                    width={18}
                    height={18}
                    alt="icon Arrow Left"
                    className="-rotate-90"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
