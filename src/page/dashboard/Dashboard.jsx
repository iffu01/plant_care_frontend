import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, Outlet } from "react-router";
import { FaPaw } from "react-icons/fa";
import Login from "./Login";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  console.log(isAdmin);

  if (!isAdmin) {
    return <Login setIsAdmin={setIsAdmin} />;
  }

  return (
    <div>
      <div className="flex">
        <div className="w-[250px] bg-amber-500  min-h-screen">
          <Link to={"/"}>
            <h2 className="font-bold text-black text-2xl flex gap-2 items-center p-2 mb-8 cursor-pointer">
              <FaPaw className="-rotate-45" />
              <span>
                Paw<span className="text-white">Mart</span>
              </span>
            </h2>
          </Link>
          <ul className="menu bg-amber-500  w-56">
            <li className="bg-amber-200 rounded mb-2 font-bold">
              <Link to="/dashboard/appointments">Appointments</Link>
            </li>
            <li className="bg-amber-200 rounded mb-2 font-bold">
              <Link to="/dashboard/contacts">Contacts</Link>
            </li>
          </ul>
          <div className="flex flex-col gap-2"></div>
        </div>
        <div className="w-full h-screen overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
