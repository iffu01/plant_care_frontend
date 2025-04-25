import React from "react";
import bgImg from "../../assets/sickBanner.jpg";
const PetSickBanner = () => {
  return (
    <div
      className="bg-no-repeat bg-cover my-8"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container py-48">
        <h2 className="text-white text-5xl font-bold">
          Do pet have Allergies?
        </h2>
        <p className="text-white text-xl font-semibold my-8 md:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          reiciendis inventore unde minima nulla sequi magni ipsam fugiat
          quaerat incidunt.
        </p>
        <p className="text-white text-xl md:w-1/2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          reiciendis inventore unde minima nulla sequi magni ipsam fugiat
          quaerat incidunt.
        </p>
      </div>
    </div>
  );
};

export default PetSickBanner;
