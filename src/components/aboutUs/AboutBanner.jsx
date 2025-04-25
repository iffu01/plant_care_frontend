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
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
