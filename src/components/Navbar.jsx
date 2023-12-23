import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

import logo from "../assets/logo.svg";
import iconBag from "../assets/icon-bag.svg";
import icon2 from "../assets/icon-3dcube.svg";
import icon3 from "../assets/icon-status-up.svg";
import icon4 from "../assets/icon-driver-refresh.svg";
import icon1 from "../assets/icon-hierarchy-square.svg";

import Button from "./Button";
import useTheme from "../UseTheme";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`py-8 sm:mb-8 md:mb-[4.25rem] transition-all ease-in duration-500 sticky top-0 z-[20] ${
        isOpen
          ? "bg-white-2 dark:bg-dark-blue-1 shadow-md"
          : "bg-white/10 dark:bg-dark-blue-1 backdrop-blur-xl"
      }`}
    >
      <nav className="flex items-center justify-between max-width">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} alt="logo" width={40} height={40} />
          <h1 className="text-3xl dark:text-white-2">weserve.</h1>
        </Link>
        <ul
          className={`lg:flex lg:gap-8 absolute divide-y lg:divide-none top-[6.50rem] lg:static z-[-10] bg-white-2 shadow-md lg:shadow-none lg:bg-transparent lg:z-auto left-0 w-full lg:w-auto lg:px-0 sm:px-16 px-6 lg:py-0 py-3 transition-all duration-300 ease-in ${
            isOpen
              ? "top-20 opacity-100 dark:bg-dark-blue-1"
              : "-top-[26rem] hidden"
          } opacity-0 lg:opacity-100`}
        >
          <li className="py-4 lg:py-0">
            <Link
              to={"/products"}
              className="text-blue-3 dark:text-white-2 hover:text-blue-3-hover transition-all"
            >
              Products
            </Link>
          </li>
          <li className="py-4 lg:py-0">
            <Menu as="div" className="relative inline-block text-left">
              <div className="group">
                <Link to={"/services"}>
                  <Menu.Button className="text-blue-3 dark:text-white-2 group-hover:text-blue-3-hover transition-all inline-flex items-center w-full justify-center gap-x-1.5">
                    Services
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-blue-3 dark:text-white-2 group-hover:text-blue-3-hover transition-all"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </Link>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-3 lg:mt-11 w-56 origin-top-right rounded-md bg-white/10 backdrop-blur-xl shadow-md focus:outline-none">
                  <div className="py-2 mx-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "text-blue-3 hover:text-white-1 hover:bg-blue-1 transition-all duration-300"
                              : "text-gray-700",
                            "block px-3 py-2.5 text-sm rounded-md"
                          )}
                        >
                          <div className="flex gap-2 items-center">
                            <img src={icon1} alt="" width={20} height={20} />
                            <span>Extra Layers</span>
                          </div>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "text-blue-3 hover:text-white-1 hover:bg-blue-1 transition-all duration-300"
                              : "text-gray-700",
                            "block px-3 py-2.5 text-sm rounded-md"
                          )}
                        >
                          <div className="flex gap-2 items-center">
                            <img src={icon2} alt="" width={20} height={20} />
                            <span>Customizable</span>
                          </div>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "text-blue-3 hover:text-white-1 hover:bg-blue-1 transition-all duration-300"
                              : "text-gray-700",
                            "block px-3 py-2.5 text-sm rounded-md"
                          )}
                        >
                          <div className="flex gap-2 items-center">
                            <img src={icon3} alt="" width={20} height={20} />
                            <span>AI Automation</span>
                          </div>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "text-blue-3 hover:text-white-1 hover:bg-blue-1 transition-all duration-300"
                              : "text-gray-700",
                            "block px-3 py-2.5 text-sm rounded-md"
                          )}
                        >
                          <div className="flex gap-2 items-center">
                            <img src={icon4} alt="" width={20} height={20} />
                            <span>Auto-Scaling</span>
                          </div>
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li className="py-4 lg:py-0">
            <Link
              to={"/pricing"}
              className="text-blue-3 dark:text-white-2 hover:text-blue-3-hover transition-all"
            >
              Pricing
            </Link>
          </li>
          <li className="py-4 lg:py-0">
            <Link
              to={"/testimonials"}
              className="text-blue-3 dark:text-white-2 hover:text-blue-3-hover transition-all"
            >
              Testimonials
            </Link>
          </li>
          <li className="py-4 lg:py-0">
            <Link
              to={"/blog"}
              className="text-blue-3 dark:text-white-2 hover:text-blue-3-hover transition-all"
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className="lg:flex lg:items-center lg:gap-3 absolute lg:static hidden">
          <button
            className="group bg-white-1 dark:bg-dark-blue-2 rounded-full inline-block p-3 hover:bg-white-1-hover transition-all duration-300"
            onClick={handleThemeSwitch}
          >
            {theme === "dark" ? (
              <SunIcon className="w-6 h-6 text-blue-3 dark:text-white-1 transition-all transforms duration-300 rotate-90" />
            ) : (
              <MoonIcon className="w-6 h-6 scale-100 rotate-100 text-blue-3 transition-all" />
            )}
          </button>
          <Link
            to={"/"}
            className="bg-white-1 rounded-full inline-block p-3 hover:bg-white-1-hover transition-all duration-300"
          >
            <img src={iconBag} alt="icon" width={24} height={24} />
          </Link>
          <Link to={"/"}>
            <Button isBlue>Sign In</Button>
          </Link>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden cursor-pointer"
        >
          {isOpen ? (
            <XMarkIcon className="w-7 h-7 text-blue-3 dark:text-white-2 hover:text-blue-3-hover transition-all" />
          ) : (
            <Bars3Icon className="w-7 h-7 text-blue-3 dark:text-white-2 hover:text-blue-3-hover transition-all" />
          )}
        </div>
      </nav>
    </header>
  );
}
