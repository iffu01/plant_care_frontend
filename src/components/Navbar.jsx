import React from "react";
import { FaPaw } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { Link, useLocation } from "react-router";
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className=" bg-amber-500 sticky top-0 z-50">
      <div className="flex items-center justify-between container py-3">
        <h2 className="font-bold text-2xl flex gap-2 items-center">
          <FaPaw className="-rotate-45" />
          <h1>
            Paw<span className="text-white">Mart</span>
          </h1>
        </h2>
        <ul className="flex gap-2 items-center">
          <li>
            <Link
              to="/"
              className={`navLink ${
                pathname === "/" ? " text-black" : "text-white"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className={`navLink ${
                pathname === "/about-us" ? " text-black" : "text-white"
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className={`navLink ${
                pathname === "/contact-us" ? " text-black" : "text-white"
              }`}
            >
              Contact Us
            </Link>
          </li>
          <button className="flex gap-2 items-center ml-5 bg-white text-orange-500  px-4 py-3 font-bold  rounded-xl hover:bg-black hover:text-white duration-300">
            <IoMdCall /> Get An Appintment
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
