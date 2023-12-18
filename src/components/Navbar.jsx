import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import iconBag from "../assets/icon-bag.svg";
import icon1 from "../assets/icon-hierarchy-square.svg";
import icon2 from "../assets/icon-3dcube.svg";
import icon3 from "../assets/icon-status-up.svg";
import icon4 from "../assets/icon-driver-refresh.svg";
import Button from "./Button";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <header className="mt-10 mb-24">
      <nav className="flex items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} alt="logo" width={40} height={40} />
          <h1 className="text-3xl">weserve.</h1>
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link
              to={"/products"}
              className="text-blue-3 hover:text-blue-3-hover transition-all"
            >
              Products
            </Link>
          </li>
          <li>
            <Menu as="div" className="relative inline-block text-left">
              <div className="group">
                <Link to={"/services"}>
                  <Menu.Button className="text-blue-3 group-hover:text-blue-3-hover transition-all inline-flex items-center w-full justify-center gap-x-1.5">
                    Services
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-blue-3 group-hover:text-blue-3-hover transition-all"
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white-1 shadow-md focus:outline-none">
                  <div className="py-2 mx-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "text-blue-3 hover:text-white-1 hover:bg-blue-1"
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
                              ? "text-blue-3 hover:text-white-1 hover:bg-blue-1"
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
                              ? "text-blue-3 hover:text-white-1 hover:bg-blue-1"
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
                              ? "text-blue-3 hover:text-white-1 hover:bg-blue-1"
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
          <li>
            <Link
              to={"/pricing"}
              className="text-blue-3 hover:text-blue-3-hover transition-all"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to={"/testimonials"}
              className="text-blue-3 hover:text-blue-3-hover transition-all"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to={"/blog"}
              className="text-blue-3 hover:text-blue-3-hover transition-all"
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-3">
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
      </nav>
    </header>
  );
}
