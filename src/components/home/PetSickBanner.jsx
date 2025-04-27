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
          Yes, pets can have allergies! Just like humans, dogs and cats can
          develop allergic reactions to various environmental factors, foods, or
          even certain medications. These allergies can cause discomfort,
          itching, and other health issues for your pet.
        </p>
        <p className="text-white text-xl md:w-1/2 ">
          <b>What can you do?</b>What can you do? If you notice symptoms like excessive scratching,
          sneezing, or digestive problems, it’s essential to consult with a vet.
          At Pawmart, we help diagnose and treat your pet’s allergies so they
          can feel their best again.
        </p>
      </div>
    </div>
  );
};

export default PetSickBanner;
