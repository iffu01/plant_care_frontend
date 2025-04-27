import React from "react";
import bgImg from "../../assets/banner.jpg";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container h-[450px]">
        <div className="max-w-[500px] h-full flex items-center">
          <div>
            <h1 className="text-5xl font-bold mb-8">
              We provide the best care for your pet
            </h1>
            <p className="mb-5">
              At Pawmart, your pet’s health is our top priority. From expert
              veterinary appointments to personalized care, we’re here to keep
              your furry friends happy, healthy, and thriving.
            </p>
            <Link to={"/contact-us"} className="btn-primary ">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
