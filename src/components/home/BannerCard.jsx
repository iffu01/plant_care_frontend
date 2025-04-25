import React from "react";

import catImg from "../../assets/card/cat.png";
import dogImg from "../../assets/card/dog.png";

const BannerCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container -mt-12">
      <div className="flex flex-col md:flex-row items-center bg-slate-300 rounded-lg p-4">
        <img src={catImg} alt="cat img" />
        <div>
          <h2 className="text-2xl font-bold mb-4">30% OFF ONLINE EXCLUSIVES</h2>
          <p>
            Lorem iffath ipsum dolor sit amet, consectetur adipiscing elit. Ut
            elit tellus.
          </p>
          <button className="btn-primary mt-4">Contact Us</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center bg-orange-300 rounded-lg p-4">
        <img src={dogImg} alt="cat img" />
        <div>
          <h2 className="text-2xl font-bold mb-4">30% OFF ONLINE EXCLUSIVES</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus.
          </p>
          <button className="btn-primary mt-4">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
