import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import bgImg from "../assets/doctors.jpg";
const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="h-[500px] flex  justify-center items-center ">
          <div className="bg-white opacity-70 px-12 py-4">
            <h1 className="font-bold text-5xl">Contact Us</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
