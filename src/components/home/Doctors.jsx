import React from "react";

import card1 from "../../assets/doctor1.jpg";
import card2 from "../../assets/doctor2.jpg";
import card3 from "../../assets/doctor3.jpg";
import { Link } from "react-router";
const Doctors = () => {
  return (
    <div className="container mt-8">
      <h2 className="text-center text-orange-500 font-bold text-4xl mb-4">
        Meet Vetenary
      </h2>
      <p className="text-center">
        Get to know the experts who care for your pet! Our team of experienced
        and compassionate veterinarians are here to provide top-tier health
        care, personalized treatments, and a friendly face every time you visit.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
          <img src={card1} alt="" className="rounded-lg" />
          <h2 className="font-bold text-3xl my-4 text-center">Dr. John Doe</h2>
          <p className="text-center mb-4">(Vetenary)</p>
          <Link to={"/contact-us"} className="btn-primary">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
          <img src={card2} alt="" className="rounded-lg" />
          <h2 className="font-bold text-3xl my-4 text-center">Dr. Winslas</h2>
          <p className="text-center mb-4">(Vetenary)</p>
          <Link to={"/contact-us"} className="btn-primary">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
          <img src={card3} alt="" className="rounded-lg" />
          <h2 className="font-bold text-3xl my-4 text-center">Dr. Will Smit</h2>
          <p className="text-center mb-4">(Vetenary)</p>
          <Link to={"/contact-us"} className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
