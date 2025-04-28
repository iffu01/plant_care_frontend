import React from "react";

import card1 from "../../assets/serviceCard1.jpg";
import card2 from "../../assets/serviceCard2.jpg";
import card3 from "../../assets/serviceCard3.jpg";
import { Link } from "react-router";

const OurServices = () => {
  return (
    <div className="container mt-8">
      <h2 className="text-center text-orange-500 font-bold text-4xl mb-4">
        Our services
      </h2>
      <p className="text-center">
        At Pawmart, we offer a full range of services to keep your pets healthy
        and happy — from veterinary appointments and health checkups to
        grooming, nutrition advice, and more. Trust us to care for your pets
        like family.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="flex flex-col items-center  p-4 bg-gray-100 rounded-lg">
          <img src={card1} alt="" className="rounded-lg" />
          <h2 className="font-bold text-3xl my-4 text-center">Pet medical</h2>
          <p className="text-center mb-4">
            At Pawmart, our Pet Medical services ensure your pets get expert
            care when they need it most. From regular health checkups to illness
            treatments, our trusted veterinarians are here to keep your pets
            healthy, strong, and happy.
          </p>
          <Link to={"/contact-us"} className="btn-primary">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
          <img src={card2} alt="" className="rounded-lg" />
          <h2 className="font-bold text-3xl my-4 text-center">Pet Care</h2>
          <p className="text-center mb-4">
            At Pawmart, we believe every pet deserves the best care. From
            regular checkups to specialized treatments, our expert veterinarians
            are here to keep your pets healthy, happy, and full of life.
          </p>
          <Link to={"/contact-us"} className="btn-primary mt-6">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
          <img src={card3} alt="" className="rounded-lg" />
          <h2 className="font-bold text-3xl my-4 text-center">
            Pet Vaccination
          </h2>
          <p className="text-center mb-4">
            Protect your pets with essential vaccinations! At Pawmart, we offer
            safe and effective vaccination services to keep your furry friends
            healthy, strong, and protected against common diseases. Book your
            appointment today!
          </p>
          <Link to={"/contact-us"} className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
