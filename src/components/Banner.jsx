import React from "react";
import Img from "../assets/incover.jpg";
const Banner = () => {
  return (
    <div
      className="h-[120vh] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <div className="flex h-full flex-col justify-center items-center">
        <p className="text-white uppercase">Simple. Beautiful. Informative</p>
        <h1 className="text-white font-bold text-8xl my-8">All About Plants</h1>
        <p className="text-white ">
          Browse plant profiles with care tips, light needs, watering schedules,
          and more — designed for clarity and ease.
        </p>
        <div className="flex gap-4 mt-20">
          <button className="btn-primary">Visit Indoor</button>
          <button className="btn-primary">Visit Outdoor</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
