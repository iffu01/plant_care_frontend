import React from "react";
import img from "../../assets/doctorImg.png";
import { IoPawOutline } from "react-icons/io5";
const AboutPawMart = () => {
  return (
    <div className="container mt-20 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <img src={img} alt="img" className="col-span-1 bg-sky-100" />
      <div className="lg:col-span-2">
        <h2 className="text-orange-500 font-bold text-5xl mb-4">
          About Paw Mart
        </h2>
        <p className="mb-8 text-2xl text-gray-700 font-semibold">
          Your pet's health and well-being are our top priority.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="grid grid-cols-2 gap-5 pt-8">
          <div className="flex gap-2">
            <div>
              <IoPawOutline className="bg-orange-400 w-18 h-18 rounded-full p-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Pet Grooming</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, quasi.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <IoPawOutline className="bg-orange-400 w-18 h-18 rounded-full p-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Pet Grooming</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, quasi.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <IoPawOutline className="bg-orange-400 w-18 h-18 rounded-full p-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Pet Grooming</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, quasi.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <IoPawOutline className="bg-orange-400 w-18 h-18 rounded-full p-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Pet Grooming</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, quasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPawMart;
