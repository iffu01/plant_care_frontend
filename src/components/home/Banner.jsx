import React from "react";
import bgImg from "../../assets/banner.jpg";
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="btn-primary mt-8">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
