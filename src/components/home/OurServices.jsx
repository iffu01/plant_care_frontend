import React from "react";

import card1 from "../../assets/serviceCard1.jpg";
import card2 from "../../assets/serviceCard2.jpg";
import card3 from "../../assets/serviceCard3.jpg";

const OurServices = () => {
  return (
    <div className="container mt-8">
      <h2 className="text-center text-orange-500 font-bold text-4xl mb-4">
        Our services
      </h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
        voluptas?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
          <img src={card1} alt="" className="rounded-lg" />
          <h2 className="font-bold text-3xl my-4 text-center">Pet medical</h2>
          <p className="text-center mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ipsum!
          </p>
          <button className="btn-primary">Contact Us</button>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
          <img src={card2} alt="" className="rounded-lg" />
          <h2 className="font-bold text-3xl my-4 text-center">Pet medical</h2>
          <p className="text-center mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ipsum!
          </p>
          <button className="btn-primary">Contact Us</button>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
          <img src={card3} alt="" className="rounded-lg" />
          <h2 className="font-bold text-3xl my-4 text-center">Pet medical</h2>
          <p className="text-center mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ipsum!
          </p>
          <button className="btn-primary">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
