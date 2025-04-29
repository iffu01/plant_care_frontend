import React from "react";
import { FaPaw } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { Link, useLocation } from "react-router";
import BookAppointment from "./BookAppointment";
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className=" bg-amber-500 sticky top-0 z-50">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-amber-500 container">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">
              <h2 className="font-bold text-black text-2xl flex gap-2 items-center">
                <FaPaw className="-rotate-45" />
                <span>
                  Paw<span className="text-white">Mart</span>
                </span>
              </h2>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal flex items-center">
                {/* Navbar menu content here */}
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
                <li>
                  <button
                    className="flex gap-2 items-center ml-5 bg-white text-orange-500  px-4 py-3 font-bold  rounded-xl hover:bg-black hover:text-white duration-300"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    <IoMdCall /> Get An Appintment
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-amber-500 min-h-full w-80 p-4">
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
            <li>
              {" "}
              <button
                className="flex gap-2 items-center mt-12 bg-white text-orange-500  px-4 py-3 font-bold  rounded-xl hover:bg-black hover:text-white duration-300"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <IoMdCall /> Get An Appintment
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Appointment Modal ---------------------------------- */}
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box bg-white">
          <BookAppointment />
          <div className="modal-action">
            <form method="dialog">
              <button className="bg-red-600 text-white rounded-xl px-4 cursor-pointer hover:bg-red-500 duration-300 py-3">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </nav>
  );
};

export default Navbar;
