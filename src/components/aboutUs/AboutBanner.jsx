import React from "react";

import bgImg from "../../assets/aboutusbg.jpg";
const AboutBanner = () => {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="h-[500px] flex  justify-center items-center ">
        <div className="bg-white opacity-70 px-12 py-4">
          <h1 className="font-bold text-5xl">About Us</h1>
          <p>
            At Pawmart, we’re passionate about your pet’s health and well-being.
            Our mission is simple: to provide expert veterinary care and quality
            pet products to help your pets live long, healthy, and happy lives.
            With a team of dedicated professionals, we offer personalized care
            tailored to your pet’s unique needs. Trust us to be your partner in
            ensuring your furry friends receive the best care possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
