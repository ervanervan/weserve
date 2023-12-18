import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import iconBag from "../assets/icon-bag.svg";
import Button from "./Button";

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
            <Link to={"/products"} className="hover:underline transition-all">
              Products
            </Link>
          </li>
          <li>
            <Link to={"/services"} className="hover:underline transition-all">
              Services
            </Link>
          </li>
          <li>
            <Link to={"/pricing"} className="hover:underline transition-all">
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to={"/testimonials"}
              className="hover:underline transition-all"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link to={"/blog"} className="hover:underline transition-all">
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
