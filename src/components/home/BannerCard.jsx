import React from "react";

import catImg from "../../assets/card/cat.png";
import dogImg from "../../assets/card/dog.png";
import { Link } from "react-router";

const BannerCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container -mt-12">
      <div className="flex flex-col md:flex-row items-center bg-slate-300 rounded-lg p-4">
        <img src={catImg} alt="cat img" />
        <div>
          <h2 className="text-2xl font-bold mb-4">30% OFF ONLINE EXCLUSIVES</h2>
          <p className="mb-5">
            Unlock huge savings with Pawmart! Enjoy 30% OFF on exclusive pet
            health services and products available only through our website.
            Limited time offer — give your pet the best for less!
          </p>
          <Link to={"/contact-us"} className="btn-primary ">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center bg-orange-300 rounded-lg p-4">
        <img src={dogImg} alt="cat img" />
        <div>
          <h2 className="text-2xl font-bold mb-4">
            SAVE UP TO 30% ALL ACCECORIES
          </h2>
          <p className="mb-5">
            Treat your pets and save big! Enjoy up to 30% OFF on all accessories
            — from cozy beds to stylish collars. Shop now and give your furry
            friends the comfort they deserve!
          </p>
          <Link to={"/contact-us"} className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
