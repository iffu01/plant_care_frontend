import React from "react";
import { FaPaw } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { Link, useLocation } from "react-router";
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className=" bg-orange-400 sticky top-0 ">
      <div className="flex items-center justify-between container py-3">
        <h2 className="font-bold text-2xl flex gap-2 items-center">
          <FaPaw className="-rotate-45" />
          Pet Website
        </h2>
        <ul className="flex gap-2 items-center">
          <li>
            <Link
              to="/"
              className={`navLink${pathname === "/" ? " text-orange-900" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className={`navLink${
                pathname === "/about-us" ? " text-orange-900" : ""
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className={`navLink${
                pathname === "/contact-us" ? " text-orange-900" : ""
              }`}
            >
              Contact Us
            </Link>
          </li>
          <button className="flex gap-2 items-center ml-5 bg-orange-900 text-white px-4 py-2 font-bold  rounded-3xl hover:bg-white hover:text-orange-800 duration-300">
            <IoMdCall /> Get An Appintment
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
