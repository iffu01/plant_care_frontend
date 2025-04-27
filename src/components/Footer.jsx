import React from "react";
import bgImg from "../assets/footer.jpg";
import {
  FaDotCircle,
  FaFacebook,
  FaPaw,
  FaPhoneVolume,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div
      className="bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container py-18 grid md:grid-cols-3 gap-4">
        <div>
          <h2 className="font-bold text-2xl text-white flex gap-2 items-center">
            <FaPaw className="-rotate-45 text-orange-400" />
            Paw Mart
          </h2>
          <p className="text-white mt-8">
            Welcome to Paw Mart — your one-stop shop for all things pet care!
            From expert veterinary services to premium pet products, we’re
            dedicated to keeping your furry friends happy, healthy, and full of
            life.
          </p>
          <div className="flex  gap-4 mt-4 ">
            <Link to="https://www.facebook.com">
              <FaFacebook className="text-white hover:text-orange-500 duration-300" />
            </Link>
            <Link to={"https://www.youtube.com/"}>
              <FaYoutube className="text-white hover:text-orange-500 duration-300" />
            </Link>
            <Link to={"https://www.twitter.com/"}>
              <FaTwitter className="text-white hover:text-orange-500 duration-300" />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Openning Hours</h2>
          <p className="text-white mb-8">
            We're here when you need us! Visit us during our convenient opening
            hours and give your pet the care they deserve. Check below for our
            regular schedule, and book your appointment anytime online!
          </p>
          <p className="text-white flex items-center gap-2 mb-4">
            <FaDotCircle className="text-orange-400 " />
            Mon - Fri : 8.00 am - 10.00 pm
          </p>
          <p className="text-white flex items-center gap-2 mb-4">
            <FaDotCircle className="text-orange-400 " />
            Saturday : 9.00 am - 2.00 pm
          </p>
          <p className="text-white flex items-center gap-2">
            <FaDotCircle className="text-orange-400 " />
            Sunday : 9.00 am - 4.00 pm
          </p>
        </div>
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Contact Info</h2>
          <p className="text-white mb-8">
            Get in touch with us! Whether you have a question, need assistance,
            or want to book an appointment, our team is here to help. Reach out
            to us through the contact details below, and we'll get back to you
            as soon as possible.
          </p>
          <p className="text-white flex items-center gap-2 mb-4">
            <FaLocationDot className="text-orange-400 " />
            212 King Street, Melbourne, Victory, Australia 52145
          </p>
          <p className="text-white flex items-center gap-2 mb-4">
            <FaPhoneVolume className="text-orange-400 " />
            Emergency Call : (+62) 585 46484
          </p>
          <p className="text-white flex items-center gap-2">
            <MdEmail className="text-orange-400 " />
            Email : mail@hellopets.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
