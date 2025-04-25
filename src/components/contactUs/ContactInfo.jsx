import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

import { MdOutlineMailOutline } from "react-icons/md";
const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="flex flex-col items-center border border-gray-300 rounded-lg p-8">
        <div className="bg-orange-500 w-12 h-12 flex items-center justify-center text-3xl rounded-full text-white">
          <MdOutlineMailOutline />
        </div>
        <h2 className="text-3xl font-bold">Email</h2>
        <p>iffath@gmail.com</p>
      </div>
      <div className="flex flex-col items-center border border-gray-300 rounded-lg p-8">
        <div className="bg-orange-500 w-12 h-12 flex items-center justify-center text-3xl rounded-full text-white">
          <CiLocationOn />
        </div>
        <h2 className="text-3xl font-bold">Address</h2>
        <p>Shiromoni, khulna</p>
      </div>
      <div className="flex flex-col items-center border border-gray-300 rounded-lg p-8">
        <div className="bg-orange-500 w-12 h-12 flex items-center justify-center text-3xl rounded-full text-white">
          <FaPhoneAlt />
        </div>
        <h2 className="text-3xl font-bold">Phone</h2>
        <p>+8801722-334455</p>
      </div>
    </div>
  );
};

export default ContactInfo;
