import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[250px] bg-sky-600 h-screen">
          <div className="flex flex-col gap-2">
            <Link
              to="/dashboard/contact-dashboard"
              className="w-full bg-white p-2"
            >
              Contacts
            </Link>
            <Link
              to="/dashboard/contact-dashboards"
              className="w-full bg-white p-2"
            >
              Accepted Contact
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
